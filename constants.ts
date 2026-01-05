import React from 'react';
import { 
  Wifi, 
  Map, 
  Utensils, 
  Sun,
  Camera,
  Trees,
  Drama,
  Bird
} from 'lucide-react';
import { Room, Amenity, Testimonial, NavigationLink } from './types.ts';

// Ícone personalizado de Cachoeira
const WaterfallIcon = (props: React.ComponentProps<'svg'>) => 
  React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  }, 
  React.createElement("path", { d: "M20 4H4" }),
  React.createElement("path", { d: "M12 4v14" }),
  React.createElement("path", { d: "M8 4v12" }),
  React.createElement("path", { d: "M16 4v12" }),
  React.createElement("path", { d: "M12 18c-2 0-3 1-3 3" }),
  React.createElement("path", { d: "M12 18c2 0 3 1 3 3" }),
  React.createElement("path", { d: "M8 16c-1 0-2 .5-2 2" }),
  React.createElement("path", { d: "M16 16c1 0 2 .5 2 2" })
);

export const APP_NAME = "Pousada Barcelos";
export const PHONE_NUMBER = "+55 (37) 3433-1216";
export const WHATSAPP_NUMBER = "+55 (37) 98848-0014";
export const WHATSAPP_LINK = "https://wa.me/5537988480014";
export const FACEBOOK_LINK = "https://www.facebook.com/pousadabarcelos/?locale=pt_BR";
export const INSTAGRAM_LINK = "https://www.instagram.com/pousadabarcelos/";
export const EMAIL_ADDRESS = "pousada@barcelos.tur.br";
export const ADDRESS = "Av. Vicente Picardi, 189 - Bairro São Paulo, São Roque de Minas - MG";
export const LOGO_URL = "https://lh3.googleusercontent.com/pw/AP1GczMNWMWwdpU9-EscorATkz8keZ70i0hNg-2L5Y523SInsiVc6pq1_RUwL3CwVj59b-H_i5yrTGo-01tQzD2rGAYqYDFmNrerAAwk1Jqh0ZCW1vIMbXZU2gysQkEaPIyu2bR_Z-LiaNV3DhltbrzD5baC=w48-h64-s-no-gm?authuser=0";

export const HERO_BG_IMAGE = "https://lh3.googleusercontent.com/pw/AP1GczOKZCG1YCLbsNcKsZkfjt-T6HyDaTBLUYboC9CGeaPUonjM9QXX8_jiCFDE8T9xHzK5AS1CIunz3J-kghdElr2E_B78U68N-F49V9ue_fm4JbF3V3rcHyEs-HwdvvXalrg0bCebtAP9xeoGXbsrxG5y=w1390-h782-s-no-gm?authuser=0";

export const HOME_CAROUSEL_IMAGES: string[] = [];

export const ABOUT_GALLERY = [
  "https://lh3.googleusercontent.com/pw/AP1GczObZMG9z_ygWBS4ngAFGjUOkClgwJW7sxCI4A0w3vXEhynQr5UdY7m53GPkLHqCtYTIFjjO0TrGYNL3v5Y_g9LHKoEblLcUE5TtD6dYrIBD0v6ENdW6l7t9wW1sfPGVSp7C_K5rEEJ4h0NvJp29KDs_=w1592-h712-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMv0H8wzjD-wZ-DhnP-1RAgeAcq59-o1-Ve_jm8Va-YlKF3LmTFEOVD2d8mg4REB5XgTWW6FHFYcnsv5tqh4xYJ87DqlsX7g-fMvtUhF0mqPDr8GrwwXg9s4gAvYVs93UOPSowIMIcil4hbRLCxtbQ_=w1043-h782-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOXDjHGOBkuB-wve8mRJ-n9Gkdb2JZ8jAXKa6EpOJNleYlKDvIvTJMQvPyzLupTlfQi_Ok5W5LmFhC0QwLtzRGPHA81hRNRbi065LuzSC4Zj7f8qe0GDJk9JV7v4-6F5_3TRuK7KGWb6Q1mUmL8UnVm=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNnuoMhPQ7MwOU4RQYGaFvR9_4PoiyYCBfvM08AXiQ6FajxAD4K2yFD1zF8CgErbfZU5GWrmEy-54UrYjQKypFOcyaDpwIce4fZTJxSiMrvy7uWP3Rf3NylnFf8MEilQlitZjS702q_ElrfDsNXFh-9=w1035-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPxk0H_oM7DopH_zYeB6mCXwlZiM_0EKtYT_gc3qfnh8soCRc7OeInMbs8zH5qfmDjLCYzJ8f4hHQ0fO5lGyXo-x531S0UFYkgdPTQ-M-GXlyEIBZ5UczMh56Ph0-QzsUrLCbXE-ZQYqL4u8m5g0FpQ=w1035-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNNSDieebOP8D7qcEGqmQ_mXVnlHsR1XsQkHEussRmGuCFxEHRX6DN5xELSoLQHE0pwm6gvK3-amw7OXER5Q9gj-oDki-CgdbOGwQPB9vO2A6KAz3xhy2H3ZF681vlSjcMcqs4uG6kPnMiVCBXYIiFj=w1390-h782-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNsoLWgmmO6O8yfusMPwUP21AsBROwsbiP3Xf-sKV7YwOYS3rpL4Gteox_gNr8K8jIE1XHIybrvPWMKCmKqJyW00dt5YKbDy59BmB2DzLbi4cyOPM8R9PVpwNPwnTpO7RDb7K1YsgbXrlJORnWCYy8o=w1390-h782-s-no-gm?authuser=0"
];

export const NAVIGATION_LINKS: NavigationLink[] = [
  { name: 'Início', href: '#hero' },
  { name: 'A Pousada', href: '#about' },
  { name: 'Acomodações', href: '#rooms' },
  { name: 'Atrativos', href: '#attractions' },
  { name: 'Contato', href: '#contact' },
];

export const ROOMS: Room[] = [
  {
    id: 'suite-essencial-casal',
    name: 'Suíte Essencial',
    description: 'Quarto privativo ideal para até três pessoas que buscam descanso e praticidade. Pode ser configurado com uma cama de casal e uma cama de solteiro, ou três camas de solteiro. Branco ou tijolinho resinado.',
    capacity: 3,
    price: 'Tarifário',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNoGeYCiGcDjUr17l7TgH97Gw_wjQHicXac_G26vraDlHyrHRgK5QTowEnUl7R-sDVOl2-kp-wswVFex8NMJzvdHyEipAM7QeEJtTnGXXrVamD6qSRJ-eKOE_K38qtMKHVmfees7znDqkkYnG3V8_nJ=w1390-h782-s-no-gm?authuser=0',
    features: ['Ar Condicionado', 'Banheiro Privativo', 'Frigobar', 'Televisão', 'Wi-Fi']
  },
  {
    id: 'suite-essencial-solteiro',
    name: 'Suíte Essencial Solteiros',
    description: 'Perfeita para amigos em viagem. Três camas individuais confortáveis para recarregar as energias. Branco ou tijolinho resinado.',
    capacity: 3,
    price: 'Tarifário',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMasItXUwNJ1qYkvwvRxKRM4RpnR1i1kGvWojuhmmzBjRTZe3l5VOmnkHR7IczpdJK6-Q8sk3d2ouaUhrKlaF-Bv-_CzV8_jV4cCTB0-aMlpHMHOjVyFw557pPFFza57jLB6Saqg7i2iO4iZlkJ1Rjh=w1390-h782-s-no-gm?authuser=0',
    features: ['3 Camas Solteiro', 'Ar Condicionado', 'Banheiro Privativo', 'Frigobar', 'Televisão', 'Wi-Fi']
  },
  {
    id: 'suite-essencial-v2',
    name: 'Suíte Essencial',
    description: 'Espaços pensados para o seu bem-estar após as trilhas na Serra. Branco ou tijolinho resinado.',
    capacity: 3,
    price: 'Tarifário',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNgo1rX2bUNsjlTnzNfAN7GAFDntbjf0clSFMAXPv_QxW9tOXg4mdAcEBFW-e53lwIzBjxL72cYrInLeO1sDXgRnqCTgrN3pefEeF_BfkIMtpZ8e_pPr4Q97YC_lUv06aSnlqH8dSBB3QZnIlFCRGkf=w1390-h782-s-no-gm?authuser=0',
    features: ['Ar Condicionado', 'Banheiro Privativo', 'Frigobar', 'Televisão', 'Wi-Fi']
  },
  {
    id: 'suite-essencial-v1',
    name: 'Suíte Essencial',
    description: 'Conforto e simplicidade em cada detalhe das nossas acomodações. Branco ou tijolinho resinado.',
    capacity: 3,
    price: 'Tarifário',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNgf5eN3gkJOTfB6UOL5e2crgzKogiJtGwuUJ0Pp1VpuzJdZWP46DfNA5iWtClW7klPD7054ra8wqIwLWkMOMOvVwegj08iGPEgzbmCrKBtxHGCO5esGT9S4roXN9C0i2bGbr-hmHwdlXdOKQTyxByZ=w1280-h720-s-no-gm?authuser=0',
    features: ['Ar Condicionado', 'Banheiro Privativo', 'Frigobar', 'Televisão', 'Wi-Fi'],
    imageMirrored: true
  },
  {
    id: 'suite-familia',
    name: 'Suíte Família',
    description: 'Nossa acomodação mais ampla. Espaço planejado para acomodar toda a família com máximo conforto e liberdade.',
    capacity: 5,
    price: 'Tarifário',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOr6QFWXYJqdSZ_1t4nbF8YlAHoKs_lj_rJkLnJgkhIud3CYAfvmo_AmVVxICqc44TzR4YPb879J-phOevM6Svt_gO6n6pF_DIzziEfhuFHEjVxdBHj7X03r8dEPgbi4GKmvod_ikd2pSyLdrZfXFwG=w1000-h563-s-no-gm?authuser=0',
    features: ['Televisão', 'Ar Condicionado', 'Banheiro Privativo', 'Frigobar', 'Wi-Fi']
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'parque-nacional',
    title: 'Parque Nacional',
    description: 'Explore um dos parques mais importantes do Brasil, berço do Rio São Francisco.',
    longDescription: 'O Parque Nacional da Serra da Canastra protege a nascente do "Velho Chico" e oferece paisagens de tirar o fôlego, trilhas preservadas e mirantes inesquecíveis.',
    icon: Trees,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN949Y5rVprv9BowlvGur_kuWBvCcZ9XjIOXovk-Z4IyWTZhK05mZB1e15dUTMqsB1B_3ziOBg87w-v1JABpCw5GjZaN6J0uJZ8QPE096miNwjoZEWl02NrZZcxxhcuZwfP6sBC1N3HfikMWHV7geej=w900-h647-s-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczN949Y5rVprv9BowlvGur_kuWBvCcZ9XjIOXovk-Z4IyWTZhK05mZB1e15dUTMqsB1B_3ziOBg87w-v1JABpCw5GjZaN6J0uJZ8QPE096miNwjoZEWl02NrZZcxxhcuZwfP6sBC1N3HfikMWHV7geej=w900-h647-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMlB9e7qtT8GOh-EkHyXTJYIERmxWE9DwpXtjmsp12ecaqvgE3Lv9rL1B0SGAyRAcwfh2MF_mvHGFhrsWK8V0EaxTvX9UO1Emy9N85IcFInUlrd1u1cD0SkTXT5Gie320y9oD-R5cs7VWLqD13pPOot=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOl5Oc8WoCoRD1usd7WIc8wgGmZgT2AImGr8MUHDLWrp2O_fY0p1dy9AtpSsw7hQcqpJNj3zX3IEV0_7008xaBK7XWrZ9imB2SHrL0gC8zsNbEPslXXyrEd28xFf4GuSIoROfnHZFx43mj2SU-IjlK9=w1035-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Parque Nacional', 'Nascente S.F.', 'Casca d Anta']
  },
  {
    id: 'cachoeiras',
    title: 'Cachoeiras',
    description: 'Além da famosa Casca d Anta, descubra dezenas de quedas d água cristalinas.',
    longDescription: 'Desde a imponente Casca d Anta com seus 186 metros até poços secretos de águas esmeraldas. Opções ideais para banho, fotografia e contemplação.',
    icon: WaterfallIcon,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNLfc3rl_eJKconiwUflFBYYlHAEv5eWsKO7F15EOufSx-iSd5xg8ug-5it3BtfX2lCOV4gEgS4FqbDuwGP54u0VWmzuAKXnAusyYK6-WlCJL9XoMZtLzjnwt635VgLeXSDvMI2dX0keQe-nJi0Iuey=w1043-h782-s-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczNLfc3rl_eJKconiwUflFBYYlHAEv5eWsKO7F15EOufSx-iSd5xg8ug-5it3BtfX2lCOV4gEgS4FqbDuwGP54u0VWmzuAKXnAusyYK6-WlCJL9XoMZtLzjnwt635VgLeXSDvMI2dX0keQe-nJi0Iuey=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMv80vADdhm7nxNLfwsEKsEHVLcQCWXu96-igkWrxMy84T1jyyKxMVF5NHPd5r2kHOHCMr25fo0sjhxvY6_jcV5YUBrwS-1jZ9bqtT5khjHv32ACzeRcoAiXvVHzEk4lkFgmnun2nTaZMiyihmk3x_s=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPyWPjUkhw2RBDENtqLOJWMF-Pcc97xFO6Pnkp-XkdpTCwUznvisuzmgYFm-vAzd28JGvZVUUwg77BRwJOu5SpUGFcsHKiKrILXhmYLKEqs4cvfFWsoP_Ecy5y_D-d6wcQEN1uv2RZPIDUm2YCqKU2_=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMRAem_a4Xokopn3uTPO8jno-z_OM5ZvuK_UXi7ESF09oOKME-Cz8aoftIsPdiYvNJnI06I8hwZqCdPKjal9EF_y46IFWMtuxeOngSoJTGKxnzT_1ofRAJvZQYKODs-q15h8iqUzhSVhWGc7XIbl7-Y=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOg543IW25RJSaz6Ik-waQ3uWjmEoE_UYUsyoTaWHbG0RNO_IzyMzoGytTo7eoZpGaebgAn8nAqsL3BYJfC9WFYNWRcWzDHEJBffot7fPhrI6mAXNTxQncfrD9NUtoUoYBbcrW-4XrcpxyVcz75j9uu=w1239-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNYjyY3eQxV9ybcnwIyn9HInWPCMG1-QFP9Gl2_cym5NP1DOkEKBdRBRyuwc6Z22WZ-ur1VgPhSl8FwpMe3PvAN0qC4pdQy9ADwLLjLEqmZkjowSMspYRK7nl9tFLtfTNMNYVaBD1zrI7cf1KzudkNw=w1284-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOJG7OF_uV_oJ4tX6HhFJntGXdu25GTaSn4d00WZAjs3-oJVacMoJHB-dl5iB8UCNi1tad18KXUqGo5zmrGiJqs0ODREfbhLs_bncguNTNvIms8jfaZEqUHc35XNkkyJE0-rPy61vnfqjkDy5J48O0W=w1276-h782-s-no-gm?authuser=0'
    ],
    imageLabels: ['Casca d Anta', 'Cachoeira da Rosa', 'Cachoeira do Brás', 'Cachoeira da Rosa 2', 'Cachoeira da Gurita', 'Cachoeira da Chinela', 'Cachoeira do Rasga Canga']
  },
  {
    id: 'fauna-flora',
    title: 'Fauna e Flora',
    description: 'Observe o tamanduá-bandeira, o lobo-guará e o pato-mergulhão.',
    longDescription: 'Um verdadeiro santuário ecológico. Com sorte e silêncio, é possível avistar o raro lobo-guará, tucanos, veados-campeiros e uma flora de Cerrado única no mundo.',
    icon: Bird,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPYtxYHmKTy7LLFSNG8uj1uPEEL8BpEUScdcG07hrdq4xkwY2MZq-R4w2NXdQTKZYQI0qpBZRhN1JQC6XRxQPFxZ3bZ3LC9zE-7drXMP1Eu1Clo5gh-i3FkvvzxFZSmDZkenm3x5650KN19gknx6VGV=w1121-h782-s-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczPYtxYHmKTy7LLFSNG8uj1uPEEL8BpEUScdcG07hrdq4xkwY2MZq-R4w2NXdQTKZYQI0qpBZRhN1JQC6XRxQPFxZ3bZ3LC9zE-7drXMP1Eu1Clo5gh-i3FkvvzxFZSmDZkenm3x5650KN19gknx6VGV=w1121-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMV6t4R18YrzckBrp99IQARsllgJuO0Ud8YOb40P2JbeVraZCgYqfyCT6IoRUQJ00wF0JGfHJC1_1GImxMvYJCwccENGJ2pIZvoXyGpLadNW_l0Q62q4sLnGUrqJ3NGIEqPaC7TLENMJZA_8njpcZFq=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPXgUU2nuYqzyrpg3X4qIbl_WB8ANmqPYTX9ntoBl7t2nlxAVV5Slt0hoDhiOgPdLeZkHghxAIKuG87Zb4LTnLeKke9xYLGKa4dJBWLIQBsFs5_LGRYejgfsmL1JngvBi3jA7GUZi6P8zLkbw_Tah4Z=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOnJMSycDtBmrnMZ8onK2Rz5jpCnYTXUWhnW-hBHd6nHyARTI-1b_ehxCVSzaCNq8SxowXY3KGWq9bmCRKRUqojMQ5iMGBSU3ZM23NooghO5m3q2CW4ATLxfN4KSy05-7WdvkGMqzj4sMPRf2_Si_Hj=w600-h383-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOKAFcdqbWY4s0Vcu1Zqy78VwhOyaRjsNG_qSx6WRw8gLV5ofVYMAxhTciepYWhr6M5wkhbv5bRyFE30ABPPGzFpt4cB2-Ti-YsScKXaP1Wzr6ReFM_CKZevQURSNXGKaaynDq9_HvGGoimv3mgYe7a=w600-h383-s-no-gm?authuser=0'
    ],
    imageLabels: ['Pato mergulhão', 'Chuveirinho', 'Teiú', 'Galito', 'Bico de Pimenta'],
    mirroredIndices: [4]
  },
  {
    id: 'cultura',
    title: 'Cultura',
    description: 'Conheça a história da região e o modo de vida simples do povo mineiro.',
    longDescription: 'A hospitalidade mineira em sua essência. Converse com produtores locais, conheça casarões históricos e vivencie a simplicidade acolhedora da roça.',
    icon: Drama,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO_aGIW6GCcWhXV25Xe7od5ej5fOTQAN53dYgufd4vzDSop3Q8iC7d071v7_ckjHc2P54XQ6BVkk_oNEy6NCMOOsrnI-rGQlSEXuKQ2_sFhE5d4_tsp6kcqqR45AziYZc2edlI2G15A4V76NXIHAXVe=w851-h567-s-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczO_aGIW6GCcWhXV25Xe7od5ej5fOTQAN53dYgufd4vzDSop3Q8iC7d071v7_ckjHc2P54XQ6BVkk_oNEy6NCMOOsrnI-rGQlSEXuKQ2_sFhE5d4_tsp6kcqqR45AziYZc2edlI2G15A4V76NXIHAXVe=w851-h567-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO14JtilyG_UvsKBKSSW3gNn-j7_kHNPX94rRJXntraRYSS5LRpg-55dI2Ytmd1qMEdm_fWw3V4-j3xyl1hhB-erint5agAU509tUOh4SpA9DmSQbJ4C_5Knp_08PR8hRmH0mVeWKChwdTB9-g12HT1=w1035-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Folia de Reis', 'Mirante da Capela'],
    imageMirrored: true
  },
  {
    id: 'cheese',
    title: 'Queijo Canastra',
    description: 'Vivencie a tradição local e prove o autêntico queijo premiado da região.',
    longDescription: 'Patrimônio Imaterial do Brasil, o Queijo Canastra possui um sabor único devido ao "terroir" da serra. Visite as queijarias premiadas e descubra os segredos da cura.',
    icon: Utensils,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMFrdOmQmBwLuAWWLZoqFK2vVofO9-OvGBviD-AlETqSfq--iKlyEh4ez8hO7BfWOkJStVL2fZ_eAGKFnAYnDcmeP_4alZXiwBtV6lQ0Vh3qnC-LNhceOo7rsdS4T2bb4aKP40sGeJOwhFH4Xzfmauc=w1200-h675-no-gm?authuser=0'
  },
  {
    id: 'tours',
    title: 'Caminhadas e Passeios 4x4',
    description: 'Indicação de roteiros para explorar as áreas mais belas da Serra.',
    longDescription: 'Seja de 4x4 acessando as partes altas e baixas do parque, ou em trilhas a pé, temos as melhores indicações de guias parceiros para sua aventura.',
    icon: Map,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNNLQdGKElIhF5MVONm-Fn27j_XLxZj9AYvuOgqb7bIw7u97Y9hpNXsQBNqybORuVYAxjz40HKJrNSZvwerJToWDUvLwXMtelzisRuDwiBYSndZCpdmCuFE4_apCU4SiNjmL3XOU-8IeQUbwM1he-XA=w1043-h782-s-no-gm?authuser=0'
  }
];

// Lógica de Pré-carregamento: Inclui as imagens principais e todas as imagens das galerias das amenidades
const ALL_AMENITY_IMAGES = AMENITIES.flatMap(a => {
  const imgs = [];
  if (a.imageUrl) imgs.push(a.imageUrl);
  if (a.imageUrls) imgs.push(...a.imageUrls);
  return imgs;
});

export const CRITICAL_ASSETS = Array.from(new Set([
  LOGO_URL,
  HERO_BG_IMAGE,
  ...ABOUT_GALLERY,
  ...ROOMS.map(r => r.imageUrl),
  ...ALL_AMENITY_IMAGES
]));

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    location: 'São Paulo, SP',
    text: 'Um lugar simples e acolhedor, bem pertinho da cachoeira. A comida é maravilhosa!',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    location: 'Belo Horizonte, MG',
    text: 'Ótimo custo benefício. O atendimento dos donos faz a gente se sentir em casa.',
    rating: 5
  }
];
