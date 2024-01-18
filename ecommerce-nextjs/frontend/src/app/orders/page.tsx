import HeroSection from "@/components/HeroSection/HeroSection";
import { fetchOrder } from "@/libs/apis";

const Orders = async () => {
    const orderData: any = await fetchOrder('test@test.com');

    
    return (
        <div>
            <HeroSection />
        </div>
    );
};

export default Orders;