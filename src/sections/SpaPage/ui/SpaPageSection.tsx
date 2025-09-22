import { Container } from '@/shared/uikit';
import Image from 'next/image';

export const SpaPageSection: React.FC = () => {
  return (
    <section className="pt-[40px]">
      <Container>
        <div className="flex gap-[20px] items-center mb-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="36"
            viewBox="0 0 34 36"
            fill="none">
            <path
              d="M32 17.9999L2 17.9999M2 17.9999L18.1485 34.1484M2 17.9999L18.1485 1.85132"
              stroke="#F4F4F4"
              strokeWidth="2.71732"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[50px] leading-[120%]">Аренда спа</p>
        </div>

        <div className="h-[550px] flex gap-[40px] bg-[#151615]">
          <div>
            <div className="relative w-[410px] h-[550px]">
              <Image fill src="/img/slides/SpaSlide1.png" alt="picture" />
            </div>
          </div>
          <div className="py-[30px]">
            <p className="text-[30px] font-[500] leading-[36px] mb-[30px]">Римская парная</p>
            <p className="text-white/70 font-[500] leading-[24px] mb-[20px]">Выберите время:</p>
          
            <div className='grid gap-[10px] grid-cols-3'>
              <div className='bg-[#262724] p-[20px] flex gap-[12px]'>
                  <p>Чекбокс</p>
                  <div>
                    <p className='text-[20px] font-[500] leading-[30px] mb-[]'>СПА (2 часа)</p>
                    <p>Аренда СПА на 1 гостя</p>
                    <div></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
