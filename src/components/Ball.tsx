'use client';

import { UserTypes } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface BallProps {
  onClick?: () => void;
  data?: UserTypes[];
}

export const BallWrapper: React.FC<BallProps> = ({ onClick, data }) => {
  const constraintsRef = useRef(null);
  const [balls, setBalls] = useState<UserTypes[]>([]);
  const [hoveredBall, setHoveredBall] = useState<number | null>(null);

  const randomPosition = () => {
    const maxX = window.innerWidth - 140;
    const maxY = window.innerHeight - 140;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    return { x, y };
  };

  useEffect(() => {
    const gravityInterval = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let newX = ball.location.x + ball.location.speedX;
          let newY = ball.location.y + ball.location.speedY;
          let newSpeedX = ball.location.speedX;
          let newSpeedY = ball.location.speedY;

          if (newX >= window.innerWidth - 140 || newX <= 0) {
            newSpeedX *= -1; // Set speedX to its negative value to reverse direction
            newX = Math.min(Math.max(newX, 0), window.innerWidth - 140);
          }
          if (newY >= window.innerHeight - 140 || newY <= 0) {
            newSpeedY *= -1; // Set speedY to its negative value to reverse direction
            newY = Math.min(Math.max(newY, 0), window.innerHeight - 140);
          }

          return {
            ...ball,
            location: {
              x: newX,
              y: newY,
              speedX: newSpeedX,
              speedY: newSpeedY,
            },
          };
        })
      );
    }, 16);

    return () => clearInterval(gravityInterval);
  }, []);

  useEffect(() => {
    if (data) {
      const newBalls = data.map((item) => {
        const { x, y } = randomPosition();
        return {
          ...item,
          location: {
            speedX: Math.random() * 1.2,
            speedY: Math.random() * 1.2,
            x,
            y,
          },
        };
      });
      setBalls(newBalls);
    }
  }, [data]);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef}>
        {balls.map((ball, index) => {
          if (!ball.status_info) {
            return (
              <motion.div
                key={index}
                className="ball cursor-pointer"
                style={{
                  width: ball.size,
                  height: ball.size,
                  position: "absolute",
                  top: ball.location.y,
                  left: ball.location.x,
                  backgroundImage: `url(${ball.image_url})`,
                }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={() => setHoveredBall(index)}
                onMouseLeave={() => setHoveredBall(null)}
              >
                {hoveredBall === index && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {ball.username}
                  </motion.span>
                )}
              </motion.div>
            );
          } else {
            return (
              <Link href={'/game'}>
                <motion.div
                  key={index}
                  className="ball cursor-pointer"
                  style={{
                    width: "170px",
                    height: "170px",
                    position: "absolute",
                    top: ball.location.y,
                    left: ball.location.x,
                    backgroundColor: hoveredBall === index ? "#fff" : "#0D0B0A",
                    border:
                      hoveredBall === index
                        ? "1px solid #0D0B0A"
                        : "1px solid #fff",
                    zIndex: 10,
                  }}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => setHoveredBall(index)}
                  onMouseLeave={() => setHoveredBall(null)}
                >
                  <motion.span
                    style={{
                      top: "40%",
                      bottom: 0,
                      color: hoveredBall === index ? "#0D0B0A" : "#fff",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Join us Early
                  </motion.span>
                </motion.div>
              </Link>
            );
          }
        })}
      </motion.div>
    </>
  );
};
