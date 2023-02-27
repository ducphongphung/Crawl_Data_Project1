import json 
with open("./nettruyenup.json", "r") as f:
        all_comics = json.load(f)

        data = []
    
        for comics in all_comics:
            for comic in comics:
                comic_data = {
                    "id": comic['detail']['id'][0],
                    "title": comic['title'],
                    "author": comic['detail']['author'],
                    "image_url": comic['image'],
                    "status":comic['detail']['status'],
                    "genres":comic['detail']['genres'],
                    "description": comic['description'],
                }
                data.append(comic_data)   

print(data)