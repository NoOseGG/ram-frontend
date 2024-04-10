import exp from "constants";

const CHARACTER_NAME = 'CHARACTER_NAME'

class sessionStorageService {
    getItem() {
        sessionStorage.getItem(CHARACTER_NAME);
    }

    setItem() {
        sessionStorage.setItem(CHARACTER_NAME, 'true');
    }

    removeItem() {
        sessionStorage.removeItem(CHARACTER_NAME);
    }
}

export default new sessionStorageService();