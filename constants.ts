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
  "https://lh3.googleusercontent.com/pw/AP1GczNNSDieebOP8D7qcEGqmQ_mXVnlHsR1XsQkHEussRmGuCFxEHRX6DN5xELSoLQHE0pwm6gvK3-amw7OXER5Q9gj-oDki-CgdbOGwQPB9vO2A6KAz3xhy2H3ZF681vlSjcMcqs4uG6kPnMiVCBXYIiFj=w1390-h782-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN6fwVweSkEpfw4Q5nBB5vnPeZrbDiOnWkf-VF5BYMI5LjnrUvClzt-7XQWdgvemoKkDU3U6V90Drpg6sgi28wLHiOun3iZpx-zCICpv5hePZYbq8r-ypk-mzntcYJ2M2pqdRHsWTMuOB995k7MQgeN=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMuA7SR8ZgcL0-IAwhlsyoLo5v1nhflIBe2eQV_GvhQ99P-NTM9g5bocFjL6Fg3pcKcGWMNsiSFMiWxc0t8h4fE207Xqna9sGBUHLHzmfrYIBzNS1vgvb3I5m4V_T8Wt4ZE2ijEof58rY-pZ359GUTP=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPmKHIdCGgXpdH-PNvikPFFOwVVTL3QuctQUkDCnmICBHFhpQwfMoEqgEEJYGDb7-EbN1-sdTBAGbJHVFuJd7H8kUKNoRKpXa4bgGZYhh2lmSFMfAwwgYmdOuEptBEc-HqYKuujADkuVevvpflUS8Xn=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPZSRBUFMJgGkWxtDPEbHYu67q2p037RQp6NlDGhBPJyA9MkdM-tlTzVK2pqNJA886Y9XdrYp1eA8p6xRqaWy3Dyjy2lNZIc3Ggcot2xGOS5wEf78qJCuk2eoI4Aj3WQDBDPiRQF8urSmKeNVnS_hc4=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczObZMG9z_ygWBS4ngAFGjUOkClgwJW7sxCI4A0w3vXEhynQr5UdY7m53GPkLHqCtYTIFjjO0TrGYNL3v5Y_g9LHKoEblLcUE5TtD6dYrIBD0v6ENdW6l7t9wW1sfPGVSp7C_K5rEEJ4h0NvJp29KDs_=w1592-h712-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNLmBlG3aFeoN7HMteJ6_97ihyuHT2J-Dm-0pptoEldG91lm17gpgRyFiSzPeQKo2NLZ7JBqk41j0TE6NXJPCCTIixW1eW95hAvvx1UColoLzQm03j2p1lMnQ_wa0UbCGUmirYDBPWMrp0wezZHHz7e=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczODHe5fcrlHwMiKGLr7R1GAzUlRS1cTBvYfNsUdUCvNzNZjKIJ1lvr3VTtT8JKZvvhdPLnn287d0Tgjepi135QstI6WVdcs-jQdoxEbKbTJS1F3W_bQRsWSa_-WzlG44nv45NEbOVmp-FtWVMOMI-Fm=w1380-h776-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP9R0jxarqGMat6p7UmivG5Sj2IBSXhk_5X33pBF-HdLd2xFaubVHjBqoYj4MeshWsa1PC57jCi-VvPxJjXE2ZRXgg4P3ka4uaUZpY3FcGRp_iwO5gAsE27ldOD0tFmL1B1ZuYc_DmrdI0NJSIoZlRI=w1380-h776-s-no-gm?authuser=0"
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
      'https://lh3.googleusercontent.com/pw/AP1GczOl5Oc8WoCoRD1usd7WIc8wgGmZgT2AImGr8MUHDLWrp2O_fY0p1dy9AtpSsw7hQcqpJNj3zX3IEV0_7008xaBK7XWrZ9imB2SHrL0gC8zsNbEPslXXyrEd28xFf4GuSIoROfnHZFx43mj2SU-IjlK9=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNe0Cc0miHYZLcp_rFQuZEz9O69WYfOAQUXfypMbksIhySHc1dEiREU-r0Z25I9kwllJ0hVBV0PAcZnj_24_wCRS_L6ndr-PWsfjd9l-8ZzN0JjHHM1BZxwAQHV6bf-PaMn0aEsLiJx5zubVjdMQ5ja=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOBgsh8DJ1F2Gk3VqFeR4Soxig27axgvHazeXBXdDnGAtTogqE533t0eHgy_HC513cj5YYfr-hxlrXc8Qvhu8EyY4pz7PQMx8C-ZWfXRp8A4ITx__GKSnSsavKxgDjplBJXulGV_2A4QY02MyYp8zh3=w1035-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Paredão da Canastra', 'Nascente do rio São Francisco', 'Cachoeira Casca d Anta', 'São Francisco', 'Curral de Pedras']
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
      'https://lh3.googleusercontent.com/pw/AP1GczOJG7OF_uV_oJ4tX6HhFJntGXdu25GTaSn4d00WZAjs3-oJVacMoJHB-dl5iB8UCNi1tad18KXUqGo5zmrGiJqs0ODREfbhLs_bncguNTNvIms8jfaZEqUHc35XNkkyJE0-rPy61vnfqjkDy5J48O0W=w1276-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOhj4Gp4o-MWZk1mRFVEBH628tfe_zSy0lSXCeFa2sonT2E28ILRexwrXhEa_RmV7CSUhv27Kewsiz9B1i8ps6GqpafLb-_EPGKsyHHbk1TQXySJ-WGnTRPPbojjsWroQeouWGQanMuypfCDhfJ3GVC=w1377-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Cachoeira Casca d Anta - parte alta', 'Cachoeira da Rosa', 'Cachoeira do Brás', 'Cachoeira da Rosa 2', 'Cachoeira da Gurita', 'Cachoeira da Chinela', 'Cachoeira do Rasga Canga', 'Cachoeira do Fundão']
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
      'https://lh3.googleusercontent.com/pw/AP1GczOKAFcdqbWY4s0Vcu1Zqy78VwhOyaRjsNG_qSx6WRw8gLV5ofVYMAxhTciepYWhr6M5wkhbv5bRyFE30ABPPGzFpt4cB2-Ti-YsScKXaP1Wzr6ReFM_CKZevQURSNXGKaaynDq9_HvGGoimv3mgYe7a=w600-h383-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNnoI0qJe3f_jMWEV5TR9rK0szZPh32T-oVg_UiQ9woImxC28FxDy_nZe7L2DKFZY8gyT7dJUUGdy-ttupfRqG4doXoUrPS8XjH_jBfZ2hYcABf2VOxVKUlWXvBYSwe4b96FsnyI_m90kJJgjVqkblW=w1128-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Pato mergulhão', 'Chuveirinho', 'Teiú', 'Galito', 'Bico de Pimenta', 'Carcará'],
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
      'https://lh3.googleusercontent.com/pw/AP1GczO14JtilyG_UvsKBKSSW3gNn-j7_kHNPX94rRJXntraRYSS5LRpg-55dI2Ytmd1qMEdm_fWw3V4-j3xyl1hhB-erint5agAU509tUOh4SpA9DmSQbJ4C_5Knp_08PR8hRmH0mVeWKChwdTB9-g12HT1=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOIZYE3ieFENloFyfvfBScHSuAsD6Q-ObTPKAVN0eYiWVnH9TbpCXmF91MKDPV-Xke7vbU7XgO46JIUHsXih1HF3j1tWQvKDo4Ow4scQzWjmDI-N2GRzZaPljKkQwfe7yH3bPcjgTZeiYfDObTCwJWR=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNkxJkbIlKfD6ieESpu7oBDTZw9EnsQpd1e854cwk4PZMyV6puQjcCUcLufWq0mCQEotOT13LY1kFPe4VrZeNqHaM3qfZVXTtqGY3xOu1Jxdg_toNnxpERktW0ZOX1k9ouTN4Ar4OL2Ocq5Ym-XvqvF=w1380-h776-s-no-gm?authuser=0'
    ],
    imageLabels: ['Folia de Reis', 'Mirante da Capela', 'Zé Mário', 'João deitado'],
  },
  {
    id: 'cheese',
    title: 'Queijo Canastra',
    description: 'Vivencie a tradição local e prove o autêntico queijo premiado da região.',
    longDescription: 'Patrimônio Imaterial do Brasil, o Queijo Canastra possui um sabor único devido ao "terroir" da serra. Visite as queijarias premiadas e descubra os segredos da cura.',
    icon: Utensils,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMFrdOmQmBwLuAWWLZoqFK2vVofO9-OvGBviD-AlETqSfq--iKlyEh4ez8hO7BfWOkJStVL2fZ_eAGKFnAYnDcmeP_4alZXiwBtV6lQ0Vh3qnC-LNhceOo7rsdS4T2bb4aKP40sGeJOwhFH4Xzfmauc=w1200-h675-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczMFrdOmQmBwLuAWWLZoqFK2vVofO9-OvGBviD-AlETqSfq--iKlyEh4ez8hO7BfWOkJStVL2fZ_eAGKFnAYnDcmeP_4alZXiwBtV6lQ0Vh3qnC-LNhceOo7rsdS4T2bb4aKP40sGeJOwhFH4Xzfmauc=w1200-h675-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczM1Yg1xv2b3GZWYTSdQfNSZScDSXxKcJutk1-5qNXuKrZWkhY3svHmheqAYFMp6UjGHAQ8yYGH9i_vO_yq_P4I7V9s-Ng3pNz1pUgXnqMMyeXQG88bwhLDMx1oD4o3md2ujUmbDoi0qplNRwYpxoXu2=w672-h363-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPJ0QERs0Smj9R6T-oTaGLE32YRkFxENpZ9YnTL0wy8McclL9V0RPyvfoP0GpxgeJAUB3gSYslZlh6qYJmsZdtN-eeVw6WCGcDvsjPzrtFWfeUsJWNIjinPiC2oJK0KTpW5LcSzuAZanTppyytI_r2Q=w1280-h720-s-no-gm?authuser=0'
    ],
    imageLabels: ['1/2 Cura', 'Curado', 'Real']
  },
  {
    id: 'tours',
    title: 'Caminhadas e Passeios 4x4',
    description: 'Indicação de roteiros para explorar as áreas mais belas da Serra.',
    longDescription: 'Seja de 4x4 acessando as partes altas e baixas do parque, ou em trilhas a pé, temos as melhores indicações de guias parceiros para sua aventura.',
    icon: Map,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNNLQdGKElIhF5MVONm-Fn27j_XLxZj9AYvuOgqb7bIw7u97Y9hpNXsQBNqybORuVYAxjz40HKJrNSZvwerJToWDUvLwXMtelzisRuDwiBYSndZCpdmCuFE4_apCU4SiNjmL3XOU-8IeQUbwM1he-XA=w1043-h782-s-no-gm?authuser=0',
    imageUrls: [
      'https://lh3.googleusercontent.com/pw/AP1GczNNLQdGKElIhF5MVONm-Fn27j_XLxZj9AYvuOgqb7bIw7u97Y9hpNXsQBNqybORuVYAxjz40HKJrNSZvwerJToWDUvLwXMtelzisRuDwiBYSndZCpdmCuFE4_apCU4SiNjmL3XOU-8IeQUbwM1he-XA=w1043-h782-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPSjzKGT72bPKaNKpTfxKnd6UbLEod3OFoDviDV5UXwI1xOS_h-Zk8r7NfFdKbcMiXbAUfD8v1qtDRUHwTj9GF2JrQI1mv5PGN8T4lcTs7fYcswSimRrcMDLDdqmbsPhvVFhGea9ZXBw8azkLlt0yKw=w1380-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPPjq8CRRKOjE8f0DQtgf1sTavP9nHd2q_I1ELz2TIKap_LROvDZEWEaiA_W_iQZXgGWKhvROechfoGhrXc6f9xp7ml35bB6bw9zu3Kq9du4QKlX4tIdQxE8Zyp4XYpNmS_gY99fLE4F72Xi61k_yeh=w1035-h776-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczM-K5zLksLZyrqr17CpiXkvWqNAHuhwAO5sYMGyL3Pk5DuOcGIyZVii_hpmbnJwvz4mglTr10bhYkcafzZYQaX8AaWMFlWW1taYGcjlpPFCT7mYeJy9yT3opeB-PIVB346bnZh3mtiqDTE8jCUES6HC=w1040-h585-s-no-gm?authuser=0'
    ],
    imageLabels: ['Trilha do Nego', 'Matinha do Ouro', 'Chapadão da Babilônia', 'Chapadão do Diamante']
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