import { NavigationFooterProps } from "./NavigationFooter.types"; 
import styles from './NavigationFooter.module.scss'; 
 
const NavigationFooter = ({previousBtn, nextBtn}: NavigationFooterProps) => { 
  
  const PreviousBtn = previousBtn;
  const NextBtn = nextBtn;

  return ( 
    <div className={styles.NavigationFooter}> 
      <PreviousBtn/>
      <NextBtn/>    
    </div> 
  ); 
}; 
  
export default NavigationFooter;  
