import userDetails from '../models/customerDetails.model';
import { Customer } from '../interfaces/userDetails.model';
import { IUser } from '../interfaces/user.interface';


class AddressService {
  //create new address for orders
  public newCustomerDetails = async (body: any): Promise<any> => {
    const {
      address: [{ addressDetails, city, state }]
    } = body;
    // const { fullName, address, mobileNumber, city, state } = body;
    console.log(body);

    const existingCustomer = await userDetails.findOne().select('+address');
    if (existingCustomer) {
      const chectkAddress = await userDetails
        .findOne({
          $or: [
            { 'address.addressDetails': addressDetails }
            //   { 'address.city': city },
            //   { 'address.state': state }
          ]
        })
        .select('+address');
      console.log(chectkAddress);
      if (chectkAddress) {
        throw new Error('Address already exist');
      } else {
        await existingCustomer.address.push(...body.address);
        await existingCustomer.markModified('address');
        return await existingCustomer.save();
      }
    } else {
      const data = await userDetails.create(body);
      return data;
    }
  };
  // // // get customer full details and address details
  public getCustomerDetails = async (): Promise<Customer[]> => {
    const customer = await userDetails.find();
    return customer;
  };
}

export default AddressService;
