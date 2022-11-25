import json
import os
import cfscrape
from bs4 import BeautifulSoup
from datetime import datetime


#bypass cloudflare
scraper = cfscrape.create_scraper()

def writelog(logstring):
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    
    with open('./error_log_nettruyentop.txt', 'a', encoding='utf8') as f:
        f.write(current_time + '\t' + logstring+'\n')
    f.close()


def dumpData(data):
    # C:\Users\Duc Phong Phung\Project_1\Crawl_Nettruyen\Crawl_Data_Project1\nettruyenon.json
    path_json = "C:\\Users\\Duc Phong Phung\\Project_1\\Crawl_Nettruyen\\Crawl_Data_Project1\\nettruyenon.json"
    with open(path_json, 'w') as f:
        json.dump(data, f, ensure_ascii = True)
    f.close()

# get all information of item
def getDetailItem(address):
    print("Address: ", address)
    page = BeautifulSoup(scraper.get(address).content, 'html.parser')

    detail = {
        "title": page.find('h1', {"class": "title-detail"}).getText(),
        "image": page.find('main', {"class": "main"}).find('div', {"class": "col-image"}).find('img').attrs['src'],
        "author": page.find('main', {"class": "main"}).find('li', {"class": "author row"}).findAll('p')[1].getText(),
        "status": page.find('main', {"class": "main"}).find('li', {"class": "status row"}).findAll('p')[1].getText(),
        "genres": [x.text for x in page.find('main', {"class": "main"}).find('li', {"class": "kind row"}).findAll('a')],
        }
    episode_list = page.find('main', {"class": "main"}).find('div', {"class": "list-chapter"}).findAll('li')[1:]
    episode_links = []
    for episode in episode_list:
        episode_links.append({
            "name": episode.find('a').text.strip(),
            "link": episode.find('a').attrs['href']
        })

    detail["episodes"] = episode_links

    return detail

# download 1 episode
def DownloadImages(address, folder): # folder name episode
    page_soup = BeautifulSoup(scraper.get(address).content, 'html.parser')
    image_list = page_soup.find('main', {"class": "main"}).find('div', {"class": "reading-detail box_doc"}).findAll('div', {"class": "page-chapter"})
    images = []
    for image in image_list:
        item = {
            "alt": image.find('img').attrs['alt'],
            "data-original": image.find('img').attrs['data-original'],
            "src": image.find('img').attrs['src'],
            "data-index": image.find('img').attrs['data-index'],
        }
        images.append(item)

        # download to folder:
        if "http" in item['src'][:5]:
            download_image(item['alt'], folder, item['src'])
        else:
            download_image(item['alt'], folder, "http:"+item['src'])

    return images

# download 1 image
def download_image(namefile, folder, url):
    fixed_name = folder+"/" + "".join(x for x in namefile if (x.isalnum() or x=='.' or x == '_' or x == ' '))
    with open(fixed_name + '.jpg', 'wb') as handle:
        try:
            response = scraper.get(url, headers={'referer': 'https://www.nettruyenon.com/'})
            if not response.ok:
                print("Warning response!")
                print(response)

            for block in response.iter_content(1024):
                if not block:
                    break
                handle.write(block)
            handle.close()
        except Exception as e:
            print("Exception: ", e)
            handle.close()
    

# Run once 
def GetItems(index):
    address_sub = "https://www.nettruyenon.com/tim-truyen-nang-cao?page={page_index}"

    if index == 1:
        address = "https://www.nettruyenon.com/tim-truyen-nang-cao"
    else:
        address = address_sub.format(page_index=index)

    items = []
    page = BeautifulSoup(scraper.get(address).content, 'html.parser')
    items_content = page.find('div', {"class": "items"}).findAll('div', {"class": "item"})
    for item in items_content:
        item_info = {
            "title": item.find('div', {"class": "title"}).text.strip(),
            "link": item.find('div', {"class": "image"}).find('a').attrs['href'],
            "image": item.find('div', {"class": "image"}).find('img').attrs['data-original'],
            "description": item.find('div', {"class": "box_text"}).text.strip()
        }

        # download description and detail, list episode link
        item_info["detail"] = getDetailItem(item_info["link"])

        items.append(item_info)
    return items

# Download All Episode in 1 Comic
def DownloadAllEpisodes(parent_folder, episodes_list):
    # make folder
    for episode in episodes_list:
        episode_folder = parent_folder + '/' +  "".join(x for x in episode['name'] if (x.isalnum() or x=='.' or x == '_' or x == ' '))
        if not os.path.isdir(episode_folder):
            os.mkdir(episode_folder)
        try:
            print("Start download: ", episode['name'])
            DownloadImages(episode['link'], episode_folder)
        except Exception as e:
            print(episode['name'])
            print(e)
            print("Download Episode Error")
            writelog(episode['name'] + ":\t" + str(e))


def DownloadEpisodeWithIndex(parent_folder, episodes_list, index): # index is index of episode in episodes_list
    episode_folder = parent_folder + '/' +  "".join(x for x in episodes_list[index]['name'] if (x.isalnum() or x=='.' or x == '_' or x == ' '))
    print("Scan special 1 episode: ", episode_folder)

    if not os.path.isdir(episode_folder):
        os.mkdir(episode_folder)
    try:
        DownloadImages(episodes_list[index]['link'], episode_folder)
    except Exception as e:
        print(episodes_list[index]['name'])
        print(e)
        print("Download Episode Error")
        writelog(e)

def DownloadComicsWithName(name): # using with has nettruyentop.json file
    
    root_path = "C:/Users/Duc Phong Phung/Project_1/Crawl_Nettruyen/Crawl_Data_Project1/Comics/"
    if not os.path.isdir(root_path):
        os.mkdir(root_path)

    # load file data
    with open('./nettruyentop.json', 'r') as f:
        all_items = json.load(f)
    f.close()
    
    for item in all_items:
        if name.lower() in item['title'].lower():
            print(item['title'])
            # Call download
            parent_folder = root_path + "/" + name + "/"
            if not os.path.isdir(parent_folder):
                os.mkdir(parent_folder)
            parent_folder += "".join(x for x in item['title'] if (x.isalnum() or x=='.' or x == '_' or x == ' ' or x == '-'))
            if not os.path.isdir(parent_folder):
                os.mkdir(parent_folder)

            DownloadAllEpisodes(parent_folder, item['detail']['episodes'])

# Call by thread
def DownloadAllEpisodesThread(item):
    print("Scan comic: ", item["title"])

    root_path = "C:/Users/Duc Phong Phung/Project_1/Crawl_Nettruyen/Crawl_Data_Project1/Comics/"
    if not os.path.isdir(root_path):
        os.mkdir(root_path)

    parent_folder = root_path + "".join(x for x in item['title'] if (x.isalnum() or x=='.' or x == '_' or x == ' '))
    if not os.path.isdir(parent_folder):
        os.mkdir(parent_folder)

    DownloadAllEpisodes(parent_folder, item['detail']['episodes'])

# Run Once
def getNetTruyenData():
    index = 1
    max_index = 2
    all_items = []
    for index in range(1, max_index+1): 
        try:
            result = GetItems(index)
        except Exception as e:
            continue
        #dump
        all_items.append(result)
    # print("So luong truyen: " , len(all_items))
    dumpData(all_items)



if __name__ == '__main__':
    getNetTruyenData()
    
    