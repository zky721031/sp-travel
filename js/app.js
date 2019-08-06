var rooms = [{
    "name": "一路往南英國行",
    "eng": "Economy Double Room",
    "price": 7000,
    "amount": 0,
    "cover": "http://cw1.tw/CW/images/article/C1449114242545.jpg",
    "discount": 0.9,
    "equipment": {
        "wifi": false,
        "bathtub": true,
        "breakfast": true
    }
}, {
    "name": "倫敦兩天波鞋舖攻略",
    "eng": "Sea view triple Room",
    "price": 7800,
    "amount": 0,
    "cover": "http://tw.blog.voicetube.com/wp-content/uploads/2015/09/19263333190_494190b9f4_b-1024x683.jpg",
    "discount": 0.8,
    "equipment": {
        "wifi": true,
        "bathtub": true,
        "breakfast": false
    }
}, {
    "name": "偽文青逛世界",
    "eng": "Elegant landscape Room",
    "price": 5400,
    "amount": 0,
    "cover": "http://www.paochefang.com/wp-content/uploads/paoimage/2012/08/013113qxn.jpg",
    "discount": 0.85,
    "equipment": {
        "wifi": false,
        "bathtub": true,
        "breakfast": true
    }
}, {
    "name": "荷蘭Arnhem 國家公園單車遊",
    "eng": "Exclusive Deluxe Room",
    "price": 9800,
    "amount": 0,
    "cover": "https://img.22europe.com/uploads/large/2017/06/uGhVRZT94Nh2jV6NvUKYYvqvqTBLToF3.jpg",
    "discount": 0.8,
    "equipment": {
        "wifi": true,
        "bathtub": false,
        "breakfast": true
    }
}, {
    "name": "波蘭謎之景點 詭異彎曲樹森林",
    "eng": "Business Double Room",
    "price": 5600,
    "amount": 0,
    "cover": "https://img.22europe.com/uploads/large/2017/06/AFvRSRUbwzEnx9iTeW3TyWCEunGitT5X.jpg",
    "discount": 0.9,
    "equipment": {
        "wifi": true,
        "bathtub": false,
        "breakfast": false
    }
}, {
    "name": "歐洲五大觀星之地",
    "eng": "Hot spring double Room",
    "price": 8400,
    "amount": 0,
    "cover": "https://img.22europe.com/uploads/large/2017/06/0t7jXHjpX6dQHTjZGy30BmB31od_zdYd.jpg",
    "discount": 0.6,
    "equipment": {
        "wifi": true,
        "bathtub": true,
        "breakfast": true
    }
}, {
    "name": "食盡歐洲CP值最高的傳統甜點",
    "eng": "Presidential Suite",
    "price": 23000,
    "amount": 0,
    "cover": "http://www.biosmonthly.com/uploads/articles/articles_coverphoto_20160729190545_3xg.JPG",
    "discount": 0.75,
    "equipment": {
        "wifi": true,
        "bathtub": true,
        "breakfast": true
    }
}, {
    "name": "新婚必讀！",
    "eng": "Luxury four Room",
    "price": 8500,
    "amount": 0,
    "cover": "https://img.22europe.com/uploads/large/2017/06/VmvFKmfBar-6WzKPNhdGbfIT95sAaIfB.jpg",
    "discount": 0.7,
    "equipment": {
        "wifi": true,
        "bathtub": true,
        "breakfast": false
    }
}];

Vue.component("room", {
    template: "#room",
    props: ["room_data", "hotel_discount", "hotel_fee", "delete_room", "id"],
    computed: {
        final_discount: function () {
            return this.room_data.discount * this.hotel_discount;
        },
        final_discount_show: function () {
            return parseInt(this.final_discount * 100);
        },
        final_price: function () {
            return parseInt(this.final_discount * this.room_data.price) + 1.0 * this.hotel_fee;
        },
        bg_css: function () {
            return {
                "background-image": "url('" + this.room_data.cover + "')"
            }
        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        rooms: rooms,
        service_fee: 200,
        discount: 0.9,
        edit_id: 0
    },
    methods: {
        addroom: function () {
            this.rooms.push({
                "name": "新房間",
                "eng": "new Room",
                "price": 0,
                "amount": 0,
                "cover": "",
                "discount": 0.5,
                "equipment": {
                    "wifi": false,
                    "bathtub": true,
                    "breakfast": true
                }
            });
            this.edit_id = this.rooms.length - 1;
        },
        delete_room: function (id) {
            this.rooms.splice(id, 1);
        }
    }
});