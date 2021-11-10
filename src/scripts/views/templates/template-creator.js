import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item card" data-id="${restaurant.id}" tabindex="0">
    <img class="card-image" src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="${restaurant.name} restaurant image."/>
    <div class="card-body">
        <div class="icons">
            <span aria-label="Rating ${restaurant.rating}."><i class="rating-icon fas fa-star fa-fw"></i> ${restaurant.rating}</span>
            <span aria-label="Location at ${restaurant.city} City."><i class="location-icon fas fa-map-marker-alt fa-fw"></i> ${restaurant.city}</span>
        </div>
        <h3 class="card-title" aria-label="${restaurant.name} Restaurant.">
          <a class="card-link" href="/#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a>
        </h3>
        <p class="card-description" aria-label="${restaurant.name} restaurant description. ${restaurant.description}">${restaurant.description}</p>
    </div>
</div>
`;

export default createRestaurantItemTemplate;
