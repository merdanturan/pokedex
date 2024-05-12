import React from 'react';
import PikachuImage from '@/assets/pikachu.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter()

    // To navigate home/list
    const handleNavigateHome = () => {
        router.push("/")
    }

    return (
        <header className="bg-danger bg-gradient py-1 position-sticky top-0 z-2">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className='col-md-6 d-flex align-items-center'>
                        <Link href={"/"}>
                            <Image src={PikachuImage} alt="Home" style={{ maxWidth: '80px', maxHeight: '80px' }} />
                        </Link>
                        <h5 role='button' className="text-light text-decoration-none mx-2" onClick={handleNavigateHome}>Home</h5>
                    </div>
                    <div className="col-md-6 text-end">
                        <h5 className="text-light">Merdan Turan</h5>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
