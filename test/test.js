const test = require('tape');
const {filterFile,description,img} = require('../public/js/logic.js');
const data = {
    "Black Lechwe": {
        "description": "Mammal. A medium-sized antelope, the black lechwe (LEECH-wee) grows to about a meter (3.3 ft) in height, weighing 60 to 128 kg (132 to 282 lb). Unlike other antelope, black lechwe are slow runners but they are good swimmers and are often seen grazing shoulder-deep in water. Their hooves are adapted for swampy areas rather than dry land, and their greasy coats act as a sort of water-proofing but also give off a distinctive odor. Only the males have antlers. They live in dryer areas forming bachelor herds during most of the year. Females and their calves depend on water more than the males and remain closer to it all year round.",
        "image": "https://switchzoo.com/assets/profiles/blacklechwe_switchzoo.jpg"
    },
    "Ring-tailed Lemur": {
        "description": "Mammal. Lemurs are primates but developed quite differently from monkeys and apes when Madagascar split from the African continent millions of years ago. Ring-tailed lemurs are unique from other lemurs in that they prefer walking on the ground to swinging through trees. Social and territorial animals, they live in groups of about 12 to 25. The females are in charge and get the best food. Although the adults have bright yellow eyes, their young have blue eyes. Lemurs are noisy, making 15 different kinds of sounds from purrs to clicks to grunts to howls. They also communicate using odor.",
        "image": "https://switchzoo.com/assets/profiles/ring-tailedlemur_switchzoo.jpg"
    },
    "Ruffed Lemur": {
        "description": "Mammal. Black and white ruffed lemurs are tree dwelling primates and the largest of all lemurs. They live in groups of two to five individuals. Unlike many other species, females are larger and dominant over males. While small in size with cat-like noses and whiskers or fox-like snouts, the lemurs' “bark” can be heard over a kilometer (3/4 mile) through the woods. They have up to a dozen different alarm calls that can specify where the danger lies and the type of predator approaching. Their lower front teeth are adapted to form a comb used for grooming, which helps form social bonds.",
        "image": "https://switchzoo.com/assets/profiles/ruffedlemur_switchzoo.jpg"
    },
    "Leopard": {
        "description": "Mammal. The leopard has the widest distribution of all wild cats and is the most adaptable of the big cats. Leopards can run up to 60 kilometers (37 miles) per hour, but will not chase prey for long distances. Consequently, they can lose their meal to lions, hyenas and wild dogs. Leopards are thought to be seven times stronger than human beings and they can haul a carcass three times their weight. They store the carcass in a tree or rocky outcropping to protect their food supply from other predators. Leopards are famous for their ability to go undetected because of their spotted coloration. Black leopards are called panthers.",
        "image": "https://switchzoo.com/assets/profiles/leopard_switchzoo.jpg"
    },
    "African Lion": {
        "description": "Mammal. Male lions are the only cats with tufted tails and manes. They can reach a length of 2.5 meters (8 feet) and a height of 1.2 meters (4 feet). Unlike most other cat species, lions are very social animals. They live in an extended family called a “pride,” that is made up of about 15 individuals, centered around a group of related females. The pride's social system is based on cooperation and division of labor. By hunting together, the pride can catch prey that could outrun a single lion. Despite their vast differences from house cats, lions do clean themselves, like to rub on things, and are known to chase their own tails.",
        "image": "https://switchzoo.com/assets/profiles/africanlion_switchzoo.jpg"
    }
}
test('test for filter',(test)=>{
    const actual = filterFile(data,'a');
    const expected ={
        "Black Lechwe": {
            "description": "Mammal. A medium-sized antelope, the black lechwe (LEECH-wee) grows to about a meter (3.3 ft) in height, weighing 60 to 128 kg (132 to 282 lb). Unlike other antelope, black lechwe are slow runners but they are good swimmers and are often seen grazing shoulder-deep in water. Their hooves are adapted for swampy areas rather than dry land, and their greasy coats act as a sort of water-proofing but also give off a distinctive odor. Only the males have antlers. They live in dryer areas forming bachelor herds during most of the year. Females and their calves depend on water more than the males and remain closer to it all year round.",
            "image": "https://switchzoo.com/assets/profiles/blacklechwe_switchzoo.jpg"
        },
        "Ring-tailed Lemur": {
            "description": "Mammal. Lemurs are primates but developed quite differently from monkeys and apes when Madagascar split from the African continent millions of years ago. Ring-tailed lemurs are unique from other lemurs in that they prefer walking on the ground to swinging through trees. Social and territorial animals, they live in groups of about 12 to 25. The females are in charge and get the best food. Although the adults have bright yellow eyes, their young have blue eyes. Lemurs are noisy, making 15 different kinds of sounds from purrs to clicks to grunts to howls. They also communicate using odor.",
            "image": "https://switchzoo.com/assets/profiles/ring-tailedlemur_switchzoo.jpg"
        },
        "Leopard": {
            "description": "Mammal. The leopard has the widest distribution of all wild cats and is the most adaptable of the big cats. Leopards can run up to 60 kilometers (37 miles) per hour, but will not chase prey for long distances. Consequently, they can lose their meal to lions, hyenas and wild dogs. Leopards are thought to be seven times stronger than human beings and they can haul a carcass three times their weight. They store the carcass in a tree or rocky outcropping to protect their food supply from other predators. Leopards are famous for their ability to go undetected because of their spotted coloration. Black leopards are called panthers.",
            "image": "https://switchzoo.com/assets/profiles/leopard_switchzoo.jpg"
        },
        "African Lion": {
            "description": "Mammal. Male lions are the only cats with tufted tails and manes. They can reach a length of 2.5 meters (8 feet) and a height of 1.2 meters (4 feet). Unlike most other cat species, lions are very social animals. They live in an extended family called a “pride,” that is made up of about 15 individuals, centered around a group of related females. The pride's social system is based on cooperation and division of labor. By hunting together, the pride can catch prey that could outrun a single lion. Despite their vast differences from house cats, lions do clean themselves, like to rub on things, and are known to chase their own tails.",
            "image": "https://switchzoo.com/assets/profiles/africanlion_switchzoo.jpg"
        }
    };
    test.deepEqual(actual,expected,"the result must equal");
    test.end();

});

test('test for get description',(test)=>{
    const actual = description(data["Black Lechwe"]);
    const expected ="Mammal. A medium-sized antelope, the black lechwe (LEECH-wee) grows to about a meter (3.3 ft) in height, weighing 60 to 128 kg (132 to 282 lb). Unlike other antelope, black lechwe are slow runners but they are good swimmers and are often seen grazing shoulder-deep in water. Their hooves are adapted for swampy areas rather than dry land, and their greasy coats act as a sort of water-proofing but also give off a distinctive odor. Only the males have antlers. They live in dryer areas forming bachelor herds during most of the year. Females and their calves depend on water more than the males and remain closer to it all year round.";
    test.deepEqual(actual,expected,"the result must equal");
    test.end();

});
test('test for get img',(test)=>{
    const actual = img(data["Black Lechwe"]);
    const expected ="https://switchzoo.com/assets/profiles/blacklechwe_switchzoo.jpg";
    test.deepEqual(actual,expected,"the result must equal");
    test.end();

});