import exp from "constants";

const CHARACTER_NAME = 'CHARACTER_NAME'

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
}

export default new sessionStorageService();