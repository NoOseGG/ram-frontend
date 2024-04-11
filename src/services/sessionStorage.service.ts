import exp from "constants";

const CHARACTER_NAME = 'CHARACTER_NAME'
const LOCATION_NAME = 'LOCATION_NAME'

class sessionStorageService {
    getItem() {
        return sessionStorage.getItem(CHARACTER_NAME);
    }

    setItem() {
        return sessionStorage.setItem(CHARACTER_NAME, 'true');
    }

    removeItem() {
        return sessionStorage.removeItem(CHARACTER_NAME);
    }

    getItemLocationShowMore() {
        return sessionStorage.getItem(LOCATION_NAME);
    }

    setItemLocationShowMore() {
        return sessionStorage.setItem(LOCATION_NAME, 'true');
    }

    removeItemLocationShowMore() {
        return sessionStorage.removeItem(LOCATION_NAME);
    }
}

export default new sessionStorageService();