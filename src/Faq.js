import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Faq() {
    const [faqs, setFaqs] = useState([
        {
            question: 'Où dormir ?',
            answer: 'Nous vous proposons de planter votre tente sur le Camping du Festival, ou de loger dans les hôtels aux alentours, toutes les informations sont sur notre page : Logement'
        },
        {
            question: 'Comment venir ?',
            answer: 'Toutes les informations concernant les transports se trouvent dans la rubrique : Transport'
        },
        {
            question: 'Où manger ?',
            answer: 'Nous vous proposons au sein du festival plusieurs points de restauration, que vous trouverez dans notre rubrique : Restauration'
        },
        {
            question: 'Comment payer dans l’enceinte du festival ?',
            answer: 'Vous pouvez payer en espèce ou en carte de crédit.'
        },
        {
            question: 'Le lieu ?',
            answer: 'Le festival aura lieu : Route de la grande cascade – 75016 PARIS,nous avons mis à votre disposition une carte interactive afin de mieux vous repérer: Carte interactive'
        },
        {
            question: 'Les horaires ?',
            answer: 'L’entrée du festival ouvre le 21 Juin à partir de 14h et ferme le 24 Juin à midi. Les horaires de fermeture de nuit sont de 3h à 10h (sauf pour les campeurs du festival).'
        },
        {
            question: 'Les enfants sont-ils autorisés ?',
            answer: (
                <>
                    <FontAwesomeIcon icon={faTimesCircle} className="icon red" />
                    {' Les enfants '}
                    <strong>de moins de 5 ans</strong>
                    {' ne sont pas autorisés dans l’enceinte du festival, et ceux de moins de 12 ans déconseillés.'}
                </>
            ),
        },



        {
            question: 'Puis-je apporter de la nourriture ?',
            answer: 'Seuls les petits en-cas, les bouteilles en plastique transparentes et les gourdes sont autorisés. Pour des raisons de sécurité, les bouteilles en verre sont évidemment interdites, tout comme les aérosols et les brumisateurs.'
        },
        {
            question: 'Il y a t-il des fontaines à eau ?',
            answer: 'De nombreuses fontaines à eaux sont mises à votre disposition dans l’enceinte du festival.'
        },
        {
            question: 'Les appareils photos et les caméras sont-ils autorisés ?',
            answer: (
                <>
                    <FontAwesomeIcon icon={faTimesCircle} className="icon red" />
                    {' '}
                    <strong>Non</strong>
                    {', les caméras, go-pros, selfies sticks et appareils de type reflex ne sont pas autorisés dans l’enceinte du festival.'}
                </>
            ),
        },
        {
            question: 'Les animaux sont-ils autorisés ?',
            answer: (
                <>
                    <FontAwesomeIcon icon={faTimesCircle} className="icon red" />
                    {' '}
                    <strong>Non</strong>
                    {', les animaux ne sont pas autorisés dans l’enceinte du festival.'}
                </>
            ),
        },
        {
            question: 'Puis-je apporter un siège ?',
            answer: (
                <>
                    <FontAwesomeIcon icon={faTimesCircle} className="icon red" />
                    {' '}
                    <strong>Non</strong>
                    {', pour des raisons de sécurité les sièges, même pliables sont interdits (autorisés dans l’enceinte du camping)'}
                </>
            ),
        },
    ]);

    const toggleAnswer = (index) => {
        setFaqs(
            faqs.map((faq, i) =>
                i === index ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h2 onClick={() => toggleAnswer(index)} className="faq-question">
                        {faq.isOpen ? '-' : '+'} {faq.question}
                    </h2>
                    {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
}

export default Faq;
