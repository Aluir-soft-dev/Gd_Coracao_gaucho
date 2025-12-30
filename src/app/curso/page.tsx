import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import Image from "next/image";
import YouTubeMusicPlayer from "../components/YouTubeMusicPlayer";

export default function Curso() {
    return (
        <div className="w-full bg-gray-100">
            

            {/* CONTAINER RESPONSIVO */}
            <div className="w-full flex justify-center px-4 py-10 md:py-28">
                
                {/* CARD RESPONSIVO */}
                <div className="
                    bg-[#Fafafa] 
                    rounded-3xl 
                    shadow-2xl 
                    p-6 md:p-12 
                    max-w-5xl 
                    flex 
                    flex-col 
                    items-center 
                    gap-6 md:gap-10
                ">
                    
                    {/* TÍTULO RESPONSIVO */}
                    <h1 className="
                        text-red-900 
                        font-bold 
                        text-center 
                        text-2xl 
                        md:text-4xl
                    ">
                        Sobre o curso de dança
                    </h1>

                    {/* PARÁGRAFOS */}
                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        O Curso de Dança do Grupo Coração Gaúcho é a oportunidade ideal para quem deseja aprender a dançar com
                        alegria, tradição e qualidade. O curso é totalmente acessível: não há mensalidade, apenas uma taxa única de
                        inscrição no valor de R$ 30,00 para garantir sua vaga.
                        Com duração de 10 aulas, realizadas uma vez por semana em horário e local definidos, o curso foi planejado
                        para proporcionar aprendizado progressivo, convivência saudável e experiências marcantes no mundo da cultura
                        gaúcha.
                    </p>

                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        Durante o curso, são ensinados diversos ritmos tradicionais, entre eles:
                        Bugio, Marchinha, Vanera, Chamamé, Milonga, Valsa, Shote e outros estilos tradicionais.
                    </p>

                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        O curso é para todos: desde quem nunca dançou antes, até quem já tem experiência e quer evoluir sua técnica
                        e estilo. Não é necessário ter par para participar, e todos são muito bem recebidos.
                    </p>

                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        Pensando no conforto e praticidade dos alunos, não é exigido o uso de trajes tradicionais durante as aulas.
                        Cada participante pode ir com roupas livres e confortáveis, o importante é estar à vontade para aprender e
                        se movimentar.
                    </p>

                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        Os professores do Gd Coração Gaúcho são conhecidos pelo carinho, atenção e dedicação com cada aluno,
                        proporcionando um ambiente acolhedor e motivador, esclarecendo todas as dúvidas e acompanhando a evolução
                        individual de cada participante.
                    </p>

                    <p className="font-medium text-sm md:text-lg leading-relaxed text-gray-800 text-justify">
                        E para celebrar essa jornada, ao final do curso é realizado um Baile de Formatura, onde os alunos fazem uma
                        apresentação especial mostrando tudo o que aprenderam durante as aulas. É um momento emocionante que reúne
                        família e amigos para prestigiar essa conquista, além de ser uma grande festa de convivência, cultura e
                        tradição.
                    </p>

                </div>
            </div>

           

            
        </div>
    );
}
