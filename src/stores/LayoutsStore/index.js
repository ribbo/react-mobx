import { action, observable } from 'mobx';
import axios from 'axios';

class LayoutsClass {
    @observable layouts = [1, 2, 3];

    constructor() {
        // this.getLayouts();
    }

    @action getLayouts(callback) {
        axios.get('/api/layouts')
            .then((response) => {
                this.layouts = response.data;
                return callback(response.data);
            }).catch((err) => {
                return err;
            });
    }

    @action setLayout(id) {
        axios.put('/1/window-manager/layout', { id })
            .then((response) => {
                return response.data;
            }).catch((err) => {
                return err;
            });
    }
}

const layoutsStore = new LayoutsClass();
export { layoutsStore, LayoutsClass };
