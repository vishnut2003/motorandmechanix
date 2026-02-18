'use client';

import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

const FaqsItemsElement = ({
  answer,
  question,
  defaultOpen,
}: {
  question: string,
  answer: string | ReactNode,
  defaultOpen?: boolean,
}) => {

  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);

  return (
    <div>
      <button
        className="flex cursor-pointer items-center justify-between gap-5 w-full border py-2 px-3 rounded-lg font-semibold bg-gray-50"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{question}</p>
        {isOpen ? (
          <RiSubtractLine
            size={20}
          />
        ) : (
          <RiAddLine
            size={20}
          />
        )}
      </button>
      <AnimatePresence
        key={question}
      >
        {
          isOpen && (
            <motion.div
              className="py-3 px-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <p>{answer}</p>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default FaqsItemsElement