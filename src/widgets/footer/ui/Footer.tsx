import { Container } from '@/shared/uikit';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151615] py-[50px]">
      <Container>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[20px] pb-[20px] border-b border-[#333232]">
          <div className="p-[20px] flex items-center gap-[17px] bg-[#262724] h-[80px] border border-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.62073 19.1966C13.2106 15.4542 18.9386 12.9869 21.8046 11.7948C29.9876 8.39124 31.688 7.8 32.7962 7.78048C33.04 7.77619 33.585 7.8366 33.938 8.12306C34.2361 8.36495 34.3182 8.6917 34.3574 8.92103C34.3967 9.15037 34.4455 9.67279 34.4067 10.081C33.9632 14.7402 32.0445 26.047 31.0683 31.2654C30.6553 33.4735 29.842 34.2139 29.0546 34.2864C27.3435 34.4438 26.0441 33.1555 24.3868 32.0691C21.7934 30.3691 20.3283 29.3109 17.811 27.652C14.9017 25.7349 16.7877 24.6812 18.4456 22.9592C18.8795 22.5085 26.4188 15.651 26.5648 15.0289C26.583 14.9511 26.6 14.6611 26.4277 14.5079C26.2554 14.3548 26.0011 14.4072 25.8176 14.4488C25.5575 14.5078 21.4145 17.2462 13.3887 22.6638C12.2127 23.4713 11.1476 23.8648 10.1932 23.8442C9.14113 23.8214 7.11734 23.2493 5.61286 22.7602C3.76755 22.1604 2.30094 21.8433 2.42865 20.8246C2.49517 20.294 3.22586 19.7513 4.62073 19.1966Z"
                fill="#F4F4F4"
              />
            </svg>

            <div className="flex flex-col gap-[2px]">
              <p className="font-[500] text-[14px] leading-[20px] text-white/50">
                Поддержка в Telegram
              </p>
              <p className="text-[14px] font-[500] leading-[20px]">@object_support</p>
            </div>
          </div>
          <div className="p-[20px] flex items-center gap-[17px] bg-[#262724] h-[80px] border border-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.24844 6.05216C3.99902 8.30158 3.99902 11.922 3.99902 19.1627V20.4427C3.99902 27.6835 3.99902 31.3039 6.24844 33.5533C8.49787 35.8027 12.1183 35.8027 19.359 35.8027H20.639C27.8798 35.8027 31.5002 35.8027 33.7496 33.5533C35.999 31.3039 35.999 27.6835 35.999 20.4427V19.1627C35.999 11.922 35.999 8.30158 33.7496 6.05216C31.5002 3.80273 27.8798 3.80273 20.639 3.80273H19.359C12.1183 3.80273 8.49787 3.80273 6.24844 6.05216ZM9.39909 13.5361C9.5724 21.8561 13.7324 26.8561 21.0257 26.8561H21.4391V22.0961C24.1191 22.3628 26.1456 24.3228 26.959 26.8561H30.7457C29.7057 23.0695 26.9723 20.9761 25.2656 20.1761C26.9723 19.1895 29.3723 16.7895 29.9456 13.5361H26.5055C25.7589 16.1761 23.5458 18.5761 21.4391 18.8028V13.5361H17.999V22.7628C15.8657 22.2295 13.1724 19.6428 13.0524 13.5361H9.39909Z"
                fill="white"
              />
            </svg>

            <div className="flex flex-col gap-[2px]">
              <p className="font-[500] text-[14px] leading-[20px] text-white/50">
                Поддержка во Вконтакте
              </p>
              <p className="text-[14px] font-[500] leading-[20px]">@object_support</p>
            </div>
          </div>
          <div className="p-[20px] flex items-center gap-[17px] bg-[#262724] h-[80px] border border-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              >
              <path
                d="M4.09917 11.1109C4.50346 9.32967 6.09645 8 8 8H32C33.9035 8 35.4965 9.32967 35.9008 11.1109L20 20.8281L4.09917 11.1109Z"
                fill="white"
              />
              <path d="M4 13.3942V27.6012L15.6064 20.487L4 13.3942Z" fill="white" />
              <path
                d="M17.5228 21.6581L4.38374 29.7118C5.02521 31.0645 6.40336 32 8 32H20.5121C20.1805 31.0617 20 30.0519 20 29C20 26.2338 21.2479 23.7591 23.2115 22.1082L22.4772 21.6581L20 23.1719L17.5228 21.6581Z"
                fill="white"
              />
              <path
                d="M36 13.3942V23.3427C34.35 21.3037 31.8273 20 29 20C27.5908 20 26.2572 20.3239 25.0696 20.9013L24.3936 20.487L36 13.3942Z"
                fill="white"
              />
              <path
                d="M36 29C36 32.866 32.866 36 29 36C25.134 36 22 32.866 22 29C22 25.134 25.134 22 29 22C32.866 22 36 25.134 36 29ZM32.0145 25.6425C31.5409 25.3584 30.9267 25.5119 30.6425 25.9855L28.3015 29.8872L27.2071 28.7929C26.8166 28.4024 26.1834 28.4024 25.7929 28.7929C25.4024 29.1834 25.4024 29.8166 25.7929 30.2071L27.3401 31.7543C28.0301 32.4443 29.1849 32.3022 29.687 31.4654L32.3575 27.0145C32.6416 26.5409 32.4881 25.9267 32.0145 25.6425Z"
                fill="white"
              />
            </svg>

            <div className="flex flex-col gap-[2px]">
              <p className="font-[500] text-[14px] leading-[20px] text-white/50">
                Поддержка по E-mail
              </p>
              <p className="text-[14px] font-[500] leading-[20px]">labirint59@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex flex-wrap justify-between items-center gap-x-[40px] gap-y-[20px]">
            <div>
              <p className="font-[500] text-[14px] leading-[20px] text-nowrap">ИП Немировский К.С.</p>
              <p className="font-[500] text-[14px] leading-[20px] text-nowrap">ИНН: 590202847506</p>
              <p className="font-[500] text-[14px] leading-[20px] text-nowrap">ОГРН: 322595800086942</p>
              <p className="font-[500] text-[14px] leading-[20px]">
                Юр. адрес: Россия, 614065, Пермский край, <span className='text-nowrap'>г. Пермь, ул.</span>
              </p>
              <p className="font-[500] text-[14px] leading-[20px] text-nowrap">Промышленная, д. 71</p>
            </div>
            <div className="flex gap-[10px]">
              <Image width={70} height={41} src="/img/VISA.png" alt="logo" />
              <Image width={70} height={41} src="/img/Mastercard-logo.png" alt="logo" />
              <Image width={70} height={41} src="/img/Mir-logo.png" alt="logo" />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex flex-wrap gap-x-[30px] gap-y-[4px] max-sm:flex-col">
              <p className="text-[14px] font-[500] leading-[20px] text-white/50">
                Copyright © {new Date().getFullYear()} ОБЪЕКТ. <span className='text-nowrap'>Все права защищены.</span>
              </p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50 text-nowrap">Правила</p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50 text-nowrap">
                Политика конфиденциальности
              </p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50 text-nowrap">
                Информация по оплате
              </p>
            </div>
            <Image
              alt="logo"
              src="/img/LogoFooter.png"
              width={140}
              height={16}
              className="mt-[20px]"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};
