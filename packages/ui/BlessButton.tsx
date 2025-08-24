import React from "react";

type BlessButtonProps = {
  count: number;
  onClick: () => void;
};

const BlessButton: React.FC<BlessButtonProps> = ({ count, onClick }) => (
  <button
    className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full hover:bg-blue-200"
    onClick={onClick}
  >
    <span role="img" aria-label="Bless">🙏</span>
    <span>{count}</span>
  </button>
);

export default BlessButton;
