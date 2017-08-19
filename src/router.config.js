import tickets from './components/Tickets';
import ticketsuccess from './components/Ticketsuccess';
import ticketsdetails from './components/Ticketsdetails';

import hotel from './components/Hotel';
import room from './components/Room';
import singleroom from './components/SingleRoom';
import roomreservation from './components/RoomReservation';
import shoptopay from './components/ShopToPay';

import restaurant from './components/restaurant';
import menu from './components/menu';
import menulist from './components/MenuList';
import restauranttransition from './components/RestaurantTransition';
import restaurantorder from './components/RestaurantOrder';
import restaurantsuccess from './components/RestaurantSuccess';

import lease from './components/lease';
import leasecycling from './components/LeaseCycling';
import cyclingorder from './components/CyclingOrder';
import cyclingsuccess from './components/CyclingSuccess';
import leaseoutdoor from './components/LeaseOutdoor';

import news from './components/news';
import dynamic from './components/dynamic';
import newsdetails from './components/NewsDetails'

import vr from './components/VR';

import user from './components/User';
import ticketsorder from './components/TicketsOrder';
import hotelorder from './components/HotelOrder';
import userrestaurantorder from './components/UserRestaurantOrder';
import leaseorder from './components/LeaseOrder';
import score from './components/score';

import wifi from './components/WIFI'

const routes=[
    {
        path:'/',
        redirect:'/tickets'
    },
    {
        path:'/tickets',
        component:tickets
    },
    {
        path:'/tickets/ticketsdetails:id',
        component:ticketsdetails
    },
    {
        path:'/tickets/ticketsdetails/ticketsuccess',
        component:ticketsuccess
    },

    {
        path:'/hotel',
        component:hotel
    },
    {
        path:'/hotel/room',
        component:room,
        children:[
            {
                path:'singleroom:id:hotel_id',
                component:singleroom
            }
        ]
    },
    {
        path:'/hotel/room/RoomReservation:house_id',
        component:roomreservation
    },
    {
        path:'/hotel/room/RoomReservation/ShopToPay:aid',
        component:shoptopay
    },

    {
        path:'/restaurant',
        component:restaurant
    },
    {
        path:'/restaurant/menu',
        component:menu,
        children:[
            {
                path:'menulist:restaurant_id:dish_id',
                component:menulist
            }
        ]
    },
    {
        path:'/restaurant/menu/RestaurantTransition:restaurant_id',
        component:restauranttransition
    },
    {
        path:'/restaurant/menu/RestaurantTransition/RestaurantOrder:restaurant_id',
        component:restaurantorder
    },
    {
        path:'/restaurant/menu/RestaurantTransition/RestaurantOrder/RestaurantSuccess:order_id',
        component:restaurantsuccess
    },

    {
        path:'/lease',
        component:lease
    },
    {
        path:'/lease/leasecycling',
        component:leasecycling
    },
    {
        path:'/lease/leasecycling/cyclingorder',
        component:cyclingorder
    },
    {
        path:'/lease/leasecycling/cyclingorder/cyclingsuccess',
        component:cyclingsuccess
    },
    {
        path:'/lease/LeaseOutdoor',
        component:leaseoutdoor
    },
    {
        path:'/news',
        component:news,
        children:[
            {
                path:'dynamic:news_class_id',
                component:dynamic
            }
        ]
    },
    {
        path:'/news/NewsDetails:news_list_id',
        component:newsdetails
    },

    {
        path:'/VR',
        component:vr
    },

    {
        path:'/user',
        component:user
    },
    {
        path:'/user/TicketsOrder',
        component:ticketsorder
    },
    {
        path:'/user/HotelOrder',
        component:hotelorder
    },
    {
        path:'/user/UserRestaurantOrder',
        component:userrestaurantorder
    },
    {
        path:'/user/LeaseOrder',
        component:leaseorder
    },
    {
        path:'/user/score',
        component:score
    },
    {
        path:'/WIFI',
        component:wifi
    }
]

export default routes