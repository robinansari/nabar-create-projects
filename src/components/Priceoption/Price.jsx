import PriceOption from "../Option/PriceOption";


const Price = () => {
    const price=[
        {
            "id":1,
            "name":"Basic Membership",
            "features":[
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price":30.00
        },
        {
            "id":2,
            "name":"Basic Membership",
            "features":[
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room",
                "Hellow our side is the best",
                "Please visited our side"
            ],
            "price":40.00
        },
        {
            "id":3,
            "name":"Basic Membership",
            "features":[
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price":50.00
        },
        {
            "id":4,
            "name":"Basic Membership",
            "features":[
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price":60.00
        },
    ]
    return (
        <div className="m-12">
            <h2 className="text-7xl font-bold">Best Price in the town </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
            {
                price.map(option =><PriceOption key={price.id} option={option}></PriceOption>)
            }
            </div>
           

            
        </div>
    );
};

export default Price;