import { Container } from '@/shared/uikit';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151615] py-[50px]">
      <Container>
        <div className="grid grid-cols-3 gap-[20px] pb-[20px] border-b border-[#333232]">
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
                Поддержка во Вконтакте
              </p>
              <p className="text-[14px] font-[500] leading-[20px]">@object_support</p>
            </div>
          </div>
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
                Поддержка по E-mail
              </p>
              <p className="text-[14px] font-[500] leading-[20px]">labirint59@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex justify-between items-center gap-[40px]">
            <div>
              <p className="font-[500] text-[14px] leading-[20px]">ИП Немировский К.С.</p>
              <p className="font-[500] text-[14px] leading-[20px]">ИНН: 590202847506</p>
              <p className="font-[500] text-[14px] leading-[20px]">ОГРН: 322595800086942</p>
              <p className="font-[500] text-[14px] leading-[20px]">
                Юр. адрес: Россия, 614065, Пермский край, г. Пермь, ул.
              </p>
              <p className="font-[500] text-[14px] leading-[20px]">Промышленная, д. 71</p>
            </div>
            <div className="flex gap-[10px]">
              <Image width={70} height={41} src="/img/VISA.png" alt="logo" />
              <Image width={70} height={41} src="/img/Mastercard-logo.png" alt="logo" />
              <Image width={70} height={41} src="/img/Mir-logo.png" alt="logo" />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex gap-[30px]">
              <p className="text-[14px] font-[500] leading-[20px] text-white/50">
                Copyright © {new Date().getFullYear()} ОБЪЕКТ. Все права защищены.
              </p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50">Правила</p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50">
                Политика конфиденциальности
              </p>
              <p className="text-[14px] font-[500] leading-[20px] text-white/50">
                Информация по оплате
              </p>
            </div>
            <Image alt='logo' src="/img/LogoFooter.png" width={140} height={16} className='mt-[20px]' />
          </div>
        </div>
      </Container>
    </footer>
  );
};
