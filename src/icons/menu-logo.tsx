type MenuLogoProps = {
  onClick(): void;
};

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <div onClick={onClick} className="text-4xl">
      🤖
    </div>
  );
};
