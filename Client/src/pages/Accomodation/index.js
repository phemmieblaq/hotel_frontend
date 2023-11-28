// Import all the svg's needed
import MiniDescription from '../../components/miniDescription'
import wifi from '../../assets/svg/wifi.svg'
import minibar from '../../assets/svg/minibar.svg'
import balcony from '../../assets/svg/balcony.svg'
import bath from '../../assets/svg/bath.svg'
import coffee from '../../assets/svg/coffee.svg'
import house from '../../assets/svg/house.svg'
import people from '../../assets/svg/people.svg'
import bed from '../../assets/svg/bed.svg'
// Full ammenities supperior rooms
const h1 = [
    {
        img: minibar,
        name: "Minibar with free breakfast",
    },
    {
        img: balcony,
        name: "Private balcony",
    },
    {
        img: bath,
        name: "Luxury bath amenities",
    },
    {
        img: coffee,
        name: "\"Green coffee\" Machine",
    },
]
//   Half ammenites, Standard rooms
const h2 = [
    {
        img: minibar,
        name: "Minibar with free breakfast",
    },
    {
        img: bath,
        name: "Luxury bath amenities",
    }
]

export const cards = [
    {
        card: {
            type: 'Superior Double ',
            feet: '20 sqm / 215 sqft',
            noBeds: 1
        },

        display: {
            title: 'Superior Double ',
            text: `The rooms at this luxury hotel in Nice are elegantly and thoughtfully! designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city
        <br/>
        <br/>
        The rooms at this luxury hotel in Nice are elegantly and thoughtfully; designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city`,
            highlights: h1
        }

    },
    {
        card: {
            type: 'Superior Twin ',
            feet: '10 sqm / 100 sqft',
            noBeds: 2
        },

        display: {
            title: 'Superior Twin ',
            text: `The rooms at this luxury hotel in Nice are elegantly and thoughtfully! designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city
        <br/>
        <br/>
        The rooms at this luxury hotel in Nice are elegantly and thoughtfully; designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city`,
            highlights: h2
        }
    },
    {
        card: {
            type: 'Standard Double ',
            feet: '20 sqm / 215 sqft',
            noBeds: 1
        },

        display: {
            title: 'Standard Double ',
            text: `The rooms at this luxury hotel in Nice are elegantly and thoughtfully! designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city
        <br/>
        <br/>
        The rooms at this luxury hotel in Nice are elegantly and thoughtfully; designed, maximizing space, light. 
        Choose a higher floor with a private terrace for a view of the whole city`,
            highlights: h2
        }
    },
    // {
    //     card: {
    //         type: 'Standard Twin ',
    //         feet: '20 sqm / 215 sqft',
    //         noBeds: 1
    //     },

    //     display: {
    //         title: 'Standard Twin ',
    //         text: `The rooms at this luxury hotel in Nice are elegantly and thoughtfully! designed, maximizing space, light. 
    //     Choose a higher floor with a private terrace for a view of the whole city
    //     <br/>
    //     <br/>
    //     The rooms at this luxury hotel in Nice are elegantly and thoughtfully; designed, maximizing space, light. 
    //     Choose a higher floor with a private terrace for a view of the whole city`,
    //         highlights: h2
    //     }
    // }
];
