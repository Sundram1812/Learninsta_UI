//  /* eslint-disable */
// import InstagramIcon from '@mui/icons-material/Instagram';
// import ContactCard from './ContactCard';
// import {contactInfo} from './contactIfo.js'
// import {styles} from '../../styles.js'

// function ContactUs() {
//   return (
//     <section className="dark:bg-gray-900">
//       <div className="container px-6 py-12 mx-auto">
//         <div>
//           <p className={styles.heroHeadText}>Contact <span className='dark:text-green-500 text-red-500'>Us</span></p>

//           <h1 className={`${styles.sectionHeadText} mt-3 text-gray-500 dark:text-gray-400`}>
//             We’d love to hear from you
//           </h1>

//           <p className={`${styles.sectionSubText} mt-3 text-gray-500 dark:text-gray-400`}>
//             Our friendly team is always here to chat.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {
//               contactInfo.map((contact)=> <ContactCard key={contact.heading} contact={contact}/>)
//             }
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;




/* eslint-disable */
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactCard from './ContactCard';
import { contactInfo } from './contactIfo.js';
import { styles } from '../../styles.js';
import { motion } from 'framer-motion';

function ContactUs() {
  // Animation variants
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

  return (
    <section className="dark:bg-gray-900 py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container px-6 py-12 mx-auto"
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center"
        >
          <p className={styles.heroHeadText}>
            Contact <span className="bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent">Us</span>
          </p>

          <h1 className={`${styles.sectionHeadText} mt-3 text-gray-500 dark:text-gray-400`}>
            We’d love to hear from you
          </h1>

          <p className={`${styles.sectionSubText} mt-3 text-gray-500 dark:text-gray-400`}>
            Our friendly team is always here to chat.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.heading}
              variants={fadeIn('up', 'tween', index * 0.2, 1)}
            >
              <ContactCard contact={contact} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactUs;