import { Itembar } from '@/shared/types/bar.type';
import { Container } from '@/shared/uikit';
import Image from 'next/image';

export const BarItem: React.FC<Itembar> = ({ buttonImageUrl, name, items }) => {
  return (
    <div>
      <div className="relative w-full h-[170px] max-sm:h-[80px] pt-[35px] max-sm:pt-[15px]">
        <Container>
          <p className="absolute z-10 text-[30px] leading-[36px] max-sm:text-[20px]">{name}</p>
        </Container>
        <Image className='object-cover' fill src={buttonImageUrl} alt="picture" />
      </div>
      <Container>
        <div
          className={`grid ${
            items.length > 5 ? 'grid-cols-2' : 'grid-cols-1'
          } gap-y-[20px] gap-x-[200px] mt-[40px] max-sm:mt-[20px] relative max-xl:grid-cols-1`}>
          {items.map((item) => {
            return (
              <div key={item.name} className="w-full flex justify-between gap-[40px]">
                {items.length > 5 && (
                  <div className="max-xl:hidden min-h-full w-[1px] bg-white/5 -top-[40px] -bottom-[50px] absolute left-1/2 -translate-x-1/2 z-10"></div>
                )}
                <div className="flex flex-col gap-[5px]">
                  <p className="font-[500] text-[20px] leading-[28px] max-w-[300px]">{item.name}</p>
                </div>
                <div className="flex gap-[4px] font-[500] leading-[24px]">
                  <p className='text-nowrap'>{item.itemSizes[0].portionWeightGrams} мл</p>
                  {item.itemSizes[0].prices[0].price && <div>|</div>}
                  <p className='text-nowrap'>{item.itemSizes[0].prices[0].price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
