import BookingModal from '../components/BookingModal'

module.exports = function bookingDestination(destination) {

    isBooked = destination.isBooked;
    if (isBooked) {
       
        return res.status(400).json({ msg: "This destination is fully booked" })
    } else {
        //Modal PopUp
        <BookingModal></BookingModal>
        destination.isBooked = true;

    }

};