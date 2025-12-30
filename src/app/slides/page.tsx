import Image from "next/image";
import Link from "next/link";
import Galeria from "../components/galeria/Galeria";
import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Blog() {
    return (
        <div className="min-h-screen flex flex-col">
            
       

            <main className="flex-1 mt-14 bg-gray-100">
                <Galeria />
            </main>
          
            

        </div>
    );
}
