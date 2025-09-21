'use client';

import { motion } from 'framer-motion';

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

export const TitleSection: React.FC = () => {
  return (
    <section className="mt-[50px] relative z-[0] overflow-hidden">
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="visible"
        className="w-full h-[375px] bg-transparent border-t border-white/15 px-[10px]">
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="w-full h-[375px] border-x border-white/15 px-[15px]">
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="w-full h-[375px] border-x border-white/15 px-[20px]">
            <motion.div
              variants={fadeIn(0.4)}
              initial="hidden"
              animate="visible"
              className="w-full h-[375px] border-x border-white/15 px-[33px]">
              <motion.div
                variants={fadeIn(0.5)}
                initial="hidden"
                animate="visible"
                className="w-full h-[375px] border-x border-white/15 px-[55px]">
                <motion.div
                  variants={fadeIn(0.1)}
                  initial="hidden"
                  animate="visible"
                  className="w-full h-[375px] border-x border-white/15 px-[75px]">
                  <div className="w-full h-[375px] border-x border-white/15 flex flex-col justify-center items-center"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full">
        <svg
          className="mb-[32px]"
          xmlns="http://www.w3.org/2000/svg"
          width={51}
          height={40}
          viewBox="0 0 51 40"
          fill="none">
          <g clipPath="url(#clip0_587_1353)">
            <path
              d="M50.1951 39.9311H28.6189V34.8533C30.8984 34.8533 33.1277 34.8941 35.357 34.8384C36.7446 34.8031 38.1566 34.7569 39.5088 34.4813C42.4794 33.8744 44.9192 31.3505 45.0183 28.331C45.1989 22.8039 45.2111 17.2632 45.0291 11.7375C44.9273 8.65416 42.6165 6.28094 39.5781 5.54372C38.5191 5.28711 37.4098 5.1174 36.3223 5.11197C28.8768 5.07532 21.4299 5.06988 13.9831 5.10247C10.7314 5.1174 7.82054 6.05284 6.13837 9.06554C5.53149 10.1517 5.21922 11.5324 5.19071 12.7897C5.08346 17.5633 5.19071 22.3409 5.13505 27.1173C5.07667 32.1162 9.14835 34.6076 12.6322 34.7732C15.2919 34.8995 17.9611 34.8343 20.6262 34.852C21.0783 34.8547 21.5304 34.852 22.0422 34.852V39.9949C21.4476 39.9949 20.8706 40.0017 20.2936 39.9949C17.2075 39.9555 14.1066 40.0926 11.0382 39.8347C4.69516 39.3038 0.175439 34.4067 0.0681818 28.0446C-0.0214252 22.6777 -0.0214252 17.308 0.0681818 11.9411C0.178154 5.18257 5.40794 0.0532522 12.1529 0.0260986C20.8258 -0.00920112 29.4986 0.0518945 38.1729 0.000302646C41.5453 -0.0200626 44.4847 1.24801 46.7955 3.42166C49.1511 5.63739 50.2128 8.75327 50.2372 12.0294C50.3037 21.1584 50.2739 30.2888 50.2779 39.4179C50.2779 39.5428 50.2399 39.6663 50.1965 39.9311H50.1951Z"
              fill="#F4F4F4"
            />
          </g>
          <defs>
            <clipPath id="clip0_587_1353">
              <rect width={50.279} height={40} fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h1 className="text-[50px] text-center leading-[120%] uppercase">
          Место для тех – <br /> кто ценит качественный отдых.
        </h1>

        <p className="text-center leading-[24px] max-w-[500px] mt-[32px] text-white/70">
          Бутик-отель в 15 минутах от города. СПА - пространство. Круглосуточный ресторан. Номера
          премиум-класса.
        </p>
      </motion.div>
    </section>
  );
};
