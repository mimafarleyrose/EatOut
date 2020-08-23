
const apiKey = '5ZaAVCHZgI_57ul6fxyVRnurwauPD6zlo5HY2EO0W9Q8dIUi8hdQH6VwoBUqL5AB0983J4Ak2afTJL-QzK-79fqsJy_Khx5kN7cIXzkDkOUeIFlih4bUpBFjOMlFXnYx';
const Yelp = {
    search(term, location, sortBy, setError){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {'headers':{'Authorization':`Bearer ${apiKey}`}})
            .then(jsonResponse => {
                if(jsonResponse.businesses) {
                    setError(true);
                    jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                            alias: business.alias,
                            price: business.price
                        }
                    })
                }})
                .catch((error) => {
                console.error('Error:', error);
                setError(false);
                return null;

                });
}}
export default Yelp

