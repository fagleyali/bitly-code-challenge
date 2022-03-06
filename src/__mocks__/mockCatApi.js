const mockResponse = {
    data:[
            {
                "weight": {
                    "imperial": "7 - 10",
                    "metric": "3 - 5"
                },
                "id": "aege",
                "name": "Aegean",
                "vetstreet_url": "http://www.vetstreet.com/cats/aegean-cat",
                "temperament": "Affectionate, Social, Intelligent, Playful, Active",
                "origin": "Greece",
                "country_codes": "GR",
                "country_code": "GR",
                "description": "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
                "life_span": "9 - 12",
                "indoor": 0,
                "alt_names": "",
                "adaptability": 5,
                "affection_level": 4,
                "child_friendly": 4,
                "dog_friendly": 4,
                "energy_level": 3,
                "grooming": 3,
                "health_issues": 1,
                "intelligence": 3,
                "shedding_level": 3,
                "social_needs": 4,
                "stranger_friendly": 4,
                "vocalisation": 3,
                "experimental": 0,
                "hairless": 0,
                "natural": 0,
                "rare": 0,
                "rex": 0,
                "suppressed_tail": 0,
                "short_legs": 0,
                "wikipedia_url": "https://en.wikipedia.org/wiki/Aegean_cat",
                "hypoallergenic": 0,
                "reference_image_id": "ozEvzdVM-"
            },
            {
                "weight": {
                    "imperial": "7 - 10",
                    "metric": "3 - 5"
                },
                "id": "aege",
                "name": "Aegean",
                "vetstreet_url": "http://www.vetstreet.com/cats/aegean-cat",
                "temperament": "Affectionate, Social, Intelligent, Playful, Active",
                "origin": "Greece",
                "country_codes": "GR",
                "country_code": "GR",
                "description": "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
                "life_span": "9 - 12",
                "indoor": 0,
                "alt_names": "",
                "adaptability": 5,
                "affection_level": 4,
                "child_friendly": 4,
                "dog_friendly": 4,
                "energy_level": 3,
                "grooming": 3,
                "health_issues": 1,
                "intelligence": 3,
                "shedding_level": 3,
                "social_needs": 4,
                "stranger_friendly": 4,
                "vocalisation": 3,
                "experimental": 0,
                "hairless": 0,
                "natural": 0,
                "rare": 0,
                "rex": 0,
                "suppressed_tail": 0,
                "short_legs": 0,
                "wikipedia_url": "https://en.wikipedia.org/wiki/Aegean_cat",
                "hypoallergenic": 0,
                "reference_image_id": "ozEvzdVM-",
                "image": {
                    "id": "ozEvzdVM-",
                    "width": 1200,
                    "height": 800,
                    "url": "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
                }
            }
        ]
    
}

function getCats(cb){
    return  cb(jest.fn().mockResolvedValue(mockResponse)) 
}

export default getCats;