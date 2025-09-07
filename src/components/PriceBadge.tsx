
interface BadgeProps {
    price: string;
}

const PriceBadge: React.FC<BadgeProps> = ({ price }) => {
    const isFree = price === 'Free';
    const badgeStyle = isFree
        ? 'bg-green-100 text-green-800'
        : 'bg-yellow-100 text-yellow-800';

    return (
        <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeStyle}`}
        >
      {price}
    </span>
    );
};

export default PriceBadge;




