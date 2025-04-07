import { DB } from "./Data";

export const db : DB[] = [
    // Need a list of Data objects that represents the best places to visit in every season in the japan
    {
        "id": 1,
        "name": "Tokyo",
        "season": "Spring",
        "description": "Tokyo is famous for its cherry blossoms in spring. The city is filled with beautiful parks and gardens where you can enjoy the stunning pink flowers.",
        "image": "https://cdn.pixabay.com/photo/2017/04/15/11/51/mt-fuji-2232246_1280.jpg",
        "vibes": "Peaceful, Blossoming",
        "active" : true
    },
    {
        "id": 2,
        "name": "Kyoto",
        "season": "Autumn",
        "description": "Kyoto is known for its stunning autumn foliage. The city's temples and gardens are adorned with vibrant red and orange leaves during this season.",
        "image": "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg",
        "vibes": "Serene, Vibrant",
        "active" : true

    },
    {
        "id": 3,
        "name": "Okinawa",
        "season": "Summer",
        "description": "Okinawa is a tropical paradise with beautiful beaches and warm weather. It's the perfect destination for summer vacations.",
        "image": "https://cdn.pixabay.com/photo/2019/10/02/16/56/landscape-4521413_1280.jpg",
        "vibes": "Relaxing, Tropical",
        "active" : true

    },
    {
        "id": 4,
        "name": "Hokkaido",
        "season": "Winter",
        "description": "Hokkaido is famous for its winter sports and stunning snow-covered landscapes. It's a great place for skiing and snowboarding.",
        "image": "https://cdn.pixabay.com/photo/2022/04/04/02/52/cherry-blossoms-7110279_1280.jpg",
        "vibes": "Chilly, Adventurous",
        "active" : true

    },
    {
        "id": 5,
        "name": "Hokkaido",
        "season": "Winter",
        "description": "Hokkaido is famous for its winter sports and stunning snow-covered landscapes. It's a great place for skiing and snowboarding.",
        "image": "https://cdn.pixabay.com/photo/2022/04/04/02/52/cherry-blossoms-7110279_1280.jpg",
        "vibes": "Chilly, Adventurous",
        "active" : false
    }
]