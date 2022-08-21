interface Props {
  image: any;
  isSelected: boolean;
}

const Flag = ({ image, isSelected, ...props }: Props) =>{ 
   return <img alt="flag" src={image} className={isSelected ? 'flag selected' : 'flag'} {...props} />
}

export default Flag