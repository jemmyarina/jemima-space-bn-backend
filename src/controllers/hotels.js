import HotelServices from '../services/hotels'

class Example {
    static async example1(req,res){
        // console.log("Birabaye====----========")
        const newHotelData = {
            name:"Marriot",
            manager:"KAZUNGU",
            cityId:1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };


        const createHotel = await HotelServices.createHotel(newHotelData);

        console.log("=======",createHotel)
    }
}
export default Example;
