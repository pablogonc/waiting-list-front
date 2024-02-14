import styles from "./page.module.css";

const sections = [{
        name: 'caja',
        logo: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/bank-teller-1534534-1300601.png',
        url: ''
    }, {
        name: 'Atencion Comercial',
        logo: 'https://static.thenounproject.com/png/526867-200.png',
        url: ''
    }, {
        name: 'Retiro de tarjetas',
        logo: 'https://icons.iconarchive.com/icons/icons8/windows-8/512/Finance-Card-In-Use-icon.png',
        url: ''
    }, {
        name: 'Cajas de seguridad',
        logo: 'https://www.shareicon.net/data/2016/06/20/783544_window_512x512.png',
        url: ''
    }, {
        name: 'Atencion Judicial',
        logo: 'https://static.thenounproject.com/png/526867-200.png',
        url: ''
    }, {
        name: 'Prestamos pignoraticos',
        logo: 'https://static.thenounproject.com/png/526867-200.png',
        url: ''
    }, {
        name: 'Subastas',
        logo: 'https://static.thenounproject.com/png/526867-200.png',
        url: ''
    }
];

export default function Home() {
  
    return (
      <main>
        <div  className={styles.sectionsbody}>
            <div className={styles.sectionsContainer}>
                {sections.map( section =>
                <a href="" className={styles.sectionItem}>
                    <img src={section.logo} alt="" />
                    <h3>{section.name}</h3>
                </a> 
                )}
            </div>
        </div>
      </main>
    );
  }