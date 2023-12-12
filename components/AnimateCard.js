import { useSpring, animated } from "@react-spring/web";

export default function AnimateCard({children}) {
  const springs = useSpring({
    from: { x: 10 },
    to: { x: 100 },
  });

  return (
    <animated.div
       >
      {children}
      </animated.div>
  );
}
