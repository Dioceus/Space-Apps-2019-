//Module is called when button is pressed.
import BookingModal from '../components/BookingModal'

module.exports = function bookingDestination(destination) {

    isBooked = destination.isBooked;
    if (isBooked) {
        //Return on the front end that Room is booked and therefore cannot be booked
        return res.status(400).json({ msg: "This destination is fully booked" })
    } else {
        //Modal PopUp
        <BookingModal></BookingModal>
        destination.isBooked = true;

        //Note: If this doesn't work, then what I can do is do this whole thing fron the front end. Basically take the data of the destination, see if it's booked or not, on the front-end
    }

};