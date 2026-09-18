import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { pizzas } from "../PizzaData";



type Props = {
    active: number;
    onChange(index: number): void;
};

export function PizzaMobileCard({
    active,
    onChange,
}: Props) {
    const pizza = pizzas[active];

    const swipeThreshold = 80;

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x < -swipeThreshold) {
            onChange((active + 1) % pizzas.length);
            return;
        }

        if (info.offset.x > swipeThreshold) {
            onChange(
                active === 0
                    ? pizzas.length - 1
                    : active - 1
            );
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pizza.id}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: .35,
                }}
                className="mt-2"
            >
                {/* Glow */}

                <motion.div
                    className="
            absolute
            left-1/2
            h-44
            w-44
            -translate-x-1/2
            rounded-full
            bg-gradient-to-br
            from-orange-300/30
            via-yellow-200/20
            to-red-300/30
            blur-3xl
          "
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [.45, .75, .45],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                />

                <div className="relative flex justify-center">

                    <motion.img
                        key={pizza.id}
                        src={pizza.image}
                        alt={pizza.name}
                        draggable={false}
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        dragElastic={0.18}
                        onDragEnd={handleDragEnd}
                        whileTap={{
                            scale: .96,
                        }}
                        initial={{
                            x: 80,
                            opacity: 0,
                            rotate: -8,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            rotate: 0,
                        }}
                        exit={{
                            x: -80,
                            opacity: 0,
                            rotate: 8,
                        }}
                        transition={{
                            duration: .45,
                        }}
                        className="
relative
z-30

mt-4

w-[270px]

select-none

drop-shadow-[0_35px_40px_rgba(0,0,0,.30)]
"
                    />

                </div>

                {/* Indicator */}

                <div
                    className="
    relative
    z-20
    mt-2
    flex
    justify-center
    gap-2
  "
                >

                    {pizzas.map((item, index) => (
                        <motion.div
                            key={item.id}
                            animate={{
                                width: active === index ? 28 : 8,
                                opacity: active === index ? 1 : .3,
                            }}
                            transition={{
                                duration: .25,
                            }}
                            className="
                h-2
                rounded-full
                bg-red-600
              "
                        />
                    ))}

                </div>
                <motion.div
                    key={`info-${pizza.id}`}
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -30,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="
relative
z-10

-mt-16

rounded-[32px]

border
border-zinc-100

bg-white

backdrop-blur-xl

px-6
pb-6
pt-20

shadow-[0_18px_45px_rgba(15,23,42,.10)]
"
                >
                    <div
                        className="
    pointer-events-none

    absolute
    left-0
    top-0

    h-24
    w-full

    bg-gradient-to-b
    from-white/90
    via-white/40
    to-transparent
  "
                    />
                    {/* Rating */}

                    <div className="flex items-center justify-center gap-2">

                        <div className="text-amber-400 text-lg">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <div className="font-semibold text-zinc-700">
                            {pizza.rating}
                        </div>

                    </div>

                    {/* Pizza Name */}

                    <h2
                        className="
      mt-5
      text-center
      text-3xl
      font-black
      text-zinc-900
    "
                    >
                        {pizza.name}
                    </h2>

                    {/* Price */}

                    {/* Price */}

                    <div className="mt-6 text-center">

                        <span
                            className="
      inline-flex
      items-center
      rounded-full
      bg-red-50
      px-4
      py-1

      text-xs
      font-semibold
      text-red-600
    "
                        >
                            🔥 Online Siparişe Özel
                        </span>

                        <div
                            className="
      mt-3
      text-6xl
      font-black
      tracking-tight
      text-red-600
    "
                        >
                            ₺{pizza.price}
                        </div>

                    </div>

                    {/* Stats */}

                    <div
                        className="
      mt-8
      grid
      grid-cols-3
      gap-3
    "
                    >

                        <StatCard
                            icon="🔥"
                            value={pizza.calories}
                            title="Kalori"
                        />

                        <StatCard
                            icon="🍕"
                            value={pizza.size}
                            title="Boyut"
                        />

                        <StatCard
                            icon="🕒"
                            value={pizza.duration}
                            title="Hazırlama"
                        />

                    </div>

                    {/* Description */}

                    <p
                        className="
      mt-8
      text-center
      leading-7
      text-zinc-600
    "
                    >
                        {pizza.description}
                    </p>

                    {/* Ingredients */}

                    <div
                        className="
      mt-8
      flex
      flex-wrap
      justify-center
      gap-2
    "
                    >
                        {pizza.ingredients.map((ingredient) => (
                            <span
                                key={ingredient}
                                className="
          rounded-full
          border
          border-orange-200
          bg-orange-50
          px-4
          py-2
          text-sm
          font-semibold
          text-orange-700
        "
                            >
                                {ingredient}
                            </span>
                        ))}
                    </div>

                    {/* Button */}

                    {/* <motion.button
                        whileTap={{
                            scale: .97,
                        }}
                        whileHover={{
                            scale: 1.02,
                        }}
                        className="
      mt-8
      w-full
      rounded-full
      bg-red-600
      py-4
      text-lg
      font-bold
      text-white
      shadow-lg
      transition-colors
      hover:bg-red-700
    "
                    >
                        🛒 Online Sipariş Ver
                    </motion.button> */}

                </motion.div>

            </motion.div>
        </AnimatePresence>
    );

    type StatCardProps = {
        icon: string;
        value: string | number;
        title: string;
    };

    function StatCard({
        icon,
        value,
        title,
    }: StatCardProps) {
        return (
            <div
                className="
        rounded-2xl
        bg-zinc-50
        p-4
        text-center
      "
            >
                <div className="text-3xl">
                    {icon}
                </div>

                <div className="mt-2 text-2xl font-black">
                    {value}
                </div>

                <div className="mt-1 text-xs text-zinc-500">
                    {title}
                </div>
            </div>
        );
    }
}