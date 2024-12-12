import { useEffect } from "react";

function ModelFrontFemale({ groupMuscle }) {
    useEffect(() => {
        const muscleElements = document.querySelectorAll('.body-map__muscle');

        muscleElements.forEach(element => {
            const muscleId = element?.dataset?.muscle ?? element.id;

            if (groupMuscle.includes(muscleId)) {
                element.classList.add('active');
            } else {  // Important: Remove 'active' class if not selected
                element.classList.remove('active');
            }
        });

    }, [groupMuscle]);
    return (
        <div className="model-front">
            <svg viewBox="0 0 700 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="body-map__muscle " id="calves" >
                    <path d="M499.74,1187.42c-.18.19-.32.41-.41.64-.15.41-1.56,3.92-5.4,3.1-.56-.11-1.15-.08-1.59.29-.42.36-.64.79-.62,1.32-.16.63-1.46,1.68-5.35,1.46-.67-.04-1.34.34-1.69.91-.08.13-2.03,3.25-8.23,1.17-.62-.21-1.3-.08-1.79.34-.05.04-4.61,3.9-9.97,3.29-3.25-.37-6.19-2.36-8.76-5.9-.29-.41-.75-.68-1.27-.74-.07,0-7.85-.98-12.23-6.46-2.53-3.17-3.48-7.29-2.82-12.25,0-.06,0-.11,0-.18.07-2.63-2.28-3.78-4.35-4.79-3.04-1.48-6.81-3.32-7.63-9.89-.07-2.07.34-4.21.78-6.47.64-3.27,1.36-6.95.65-11.1-1.08-6.44-1.32-13.36-1.21-16.21.05-1.47-.69-2.37-1.22-3.04-.95-1.16-2.53-3.12.59-13.18,3.17-10.2-1.18-36.83-6.22-67.67-2.61-15.99-5.31-32.52-6.95-47.07,0-.08-.03-.15-.05-.23-.65-2.6-1.67-5.3-2.84-8.43-4.73-12.66-12.54-33.49-8.01-84.29,4.14,6.15,10.8,9.19,20.16,9.19,1.81,0,3.74-.11,5.75-.34l1.22-.13c8.28-.88,22.16-2.37,23.74-23.03.45-5.82,3.28-8.7,6.14-10.75,7.26,23.79,14.28,59.02,2.29,139.18-.51,3.18-12.4,78.1-3.22,100.05,7.86,18.79,16.17,30.31,19.73,35.22.54.77.96,1.34,1.22,1.73.99,1.51,4.74,5.93,8.72,10.6,3.56,4.18,7.23,8.51,8.2,9.91.16.25.35.51.56.8,3,4.25,5.89,9.1,2.05,12.93Z">
                    </path>
                    <path d="M249.38,986.35c-1.17,3.12-2.19,5.83-2.84,8.43-.02.08-.04.15-.05.23-1.63,14.55-4.34,31.08-6.95,47.06-5.04,30.84-9.39,57.47-6.22,67.68,3.12,10.06,1.54,12.01.59,13.18-.53.67-1.28,1.58-1.22,3.04.11,2.85-.13,9.77-1.21,16.21-.71,4.15.02,7.84.65,11.1.44,2.26.85,4.4.78,6.47-.82,6.57-4.6,8.4-7.63,9.89-2.08,1.02-4.43,2.16-4.35,4.79,0,.06,0,.11,0,.18.66,4.96-.29,9.08-2.82,12.25-4.38,5.48-12.16,6.45-12.23,6.46-.52.06-.98.33-1.27.74-2.56,3.53-5.5,5.52-8.74,5.9-5.31.63-9.94-3.26-9.99-3.29-.49-.42-1.17-.56-1.79-.34-6.19,2.07-8.14-1.04-8.21-1.14-.33-.62-1-.99-1.7-.94-3.88.22-5.19-.83-5.35-1.46.03-.54-.2-.96-.62-1.32-.44-.37-1.02-.41-1.59-.29-3.84.82-5.24-2.69-5.4-3.08-.08-.25-.23-.48-.41-.66-3.84-3.83-.95-8.68,2.05-12.93.21-.29.4-.56.56-.8.97-1.4,4.64-5.73,8.19-9.91,3.98-4.67,7.74-9.09,8.72-10.6.25-.39.67-.96,1.22-1.73,3.56-4.92,11.86-16.43,19.73-35.22,9.18-21.95-2.71-96.87-3.22-100.03-12-80.18-4.98-115.41,2.29-139.19,2.86,2.05,5.69,4.93,6.14,10.75,1.59,20.65,15.46,22.14,23.74,23.03l1.22.13c2.02.23,3.94.34,5.75.34,9.36,0,16.02-3.04,20.16-9.19,4.53,50.79-3.27,71.63-8.01,84.29Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="quads" >
                    <path d="M450.92,770.32c-.25,3.05-.49,6.06-.73,8.99,0,.05,0,.1,0,.15-1.91,19.6-5.86,38.86-11.11,41.3-.53.25-1.31.42-2.59-.48-4.85-3.35-8.76-4.4-11.94-3.19-5.33,2.03-6.99,9.77-8.74,17.96-2.08,9.67-4.22,19.66-11.82,20.71-10.15,1.41-20.81-35.22-25.14-58.68v-.02c-2.78-23.44-7.55-55.3-12.89-74.54-8.26-29.78-16.77-74.96-18.78-91.76-1.78-14.92-9.77-21.19-14.66-22.55.61-4.89,4.33-8.53,10.63-14.68,9.96-9.73,26.62-26,45.34-63.4,11.12-22.19,25.81-26.22,38.78-29.79.24-.06.46-.13.7-.19h0c1.35-.28,2.61-.64,3.79-1.08.02,0,.04,0,.05-.02.17-.04.34-.1.51-.15,1.47,3.5,3.41,8.59,6.11,19.57.02.05.03.11.05.15.18.53,18.09,52.59,20.16,88.85,1.84,32.19-3.25,107.1-7.7,162.85Z">
                    </path>
                    <path d="M328.08,608.21c-4.89,1.36-12.88,7.63-14.66,22.55-2,16.8-10.52,61.97-18.78,91.76-5.32,19.21-10.08,51.01-12.87,74.46,0,.03,0,.04,0,.07-4.32,23.47-14.95,60.11-25.15,58.72-7.6-1.04-9.74-11.03-11.82-20.71-1.75-8.19-3.41-15.93-8.74-17.96-3.18-1.22-7.09-.17-11.94,3.19-1.29.89-2.06.72-2.59.48-5.22-2.43-9.15-21.51-11.08-41.01l-.03-.32c-4.61-56.38-10.38-137.98-8.44-171.96,2.07-36.26,19.98-88.32,20.16-88.85.02-.04.04-.1.05-.15,2.7-10.98,4.64-16.07,6.11-19.57.17.05.34.11.51.15,0,0,.03.02.05.02,1.18.43,2.44.79,3.79,1.08h0c.24.06.46.13.7.19,12.97,3.57,27.66,7.6,38.78,29.79,18.72,37.4,35.38,53.67,45.34,63.4,6.29,6.15,10.02,9.79,10.63,14.68Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="obliques" >
                    <path d="M430.21,493.81c.22.63.44,1.22.69,1.8-.13.04-.25.1-.39.15-.02,0-.04,0-.05.02-1.11.33-2.24.64-3.41.96-.02,0-.04,0-.05,0-3.11.64-6.75.88-10.89.69-27.1-1.28-29.87-25.54-30.39-50.28-.53-24.56-2.53-42.6-4-55.78-2.79-25.07-3.84-34.46,8.28-45.96,14.86-14.11,22.21-21.52,26.21-26.41,0,0,.03-.03.04-.04,0-.02.03-.03.04-.04,2.75-2.99,5.09-6.51,7.59-10.29,2.62-3.96,5.32-8.03,8.87-12.1-.32,1.55-.48,3.24-.48,5.07,0,2.29.25,4.81.76,7.54-.73,2.23-4.01,12.28-4.72,15.32-.08.36-.24,1.06-.45,2.02-5.11,22.59-8.79,36.58-10.96,41.6-2.92,6.76-5.84,21.01-7.41,28.67-.42,2.05-.78,3.81-.91,4.25-.71,2.42-2.1,21.3-.19,31.24,1,5.18,5.25,16.28,10.18,29.13,4.45,11.61,9.05,23.62,11.67,32.44Z">
                    </path>
                    <path d="M278.87,391.37c-1.47,13.18-3.47,31.22-4,55.78-.52,24.74-3.29,49-30.39,50.28-4.14.19-7.78-.04-10.89-.69-.02,0-.04,0-.05,0-1.17-.33-2.3-.64-3.41-.96-.02,0-.04-.02-.05-.02-.14-.05-.26-.11-.39-.15.24-.6.48-1.21.72-1.88,2.59-8.74,7.2-20.75,11.64-32.36,4.92-12.85,9.18-23.94,10.18-29.13,1.92-9.95.52-28.83-.19-31.24-.13-.43-.49-2.21-.92-4.25-1.56-7.65-4.48-21.9-7.4-28.66-2.18-5.01-5.87-19.02-10.97-41.63-.21-.94-.36-1.62-.44-1.99-.72-3.04-3.99-13.09-4.73-15.32.92-4.89,1.01-9.1.28-12.59,3.55,4.07,6.24,8.14,8.87,12.09,2.48,3.76,4.82,7.27,7.56,10.26.02.03.04.04.05.07.02.02.04.04.05.06,4,4.88,11.35,12.29,26.2,26.39,12.12,11.5,11.07,20.88,8.28,45.96Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="abdominals" >
                    <path d="M378.74,352.61c1.27-4.66,2.04-7.48.72-10.89-1.97-5.06-7.71-9.37-18.64-14-8.71-3.68-19.87-6.44-25.06-3.13-2.11,1.35-3.14,3.67-3.14,7.09,0,.98-.82,1.77-1.81,1.77-.18,0-.35-.03-.52-.07-.16.04-.34.07-.52.07-1,0-1.81-.79-1.81-1.77,0-3.42-1.02-5.74-3.14-7.09-5.19-3.31-16.34-.55-25.06,3.13-10.93,4.62-16.67,8.94-18.64,14-1.32,3.42-.55,6.23.72,10.89,1.28,4.7,3.04,11.15,3.41,21.39.09,2.57.04,3.78-.04,5.45-.07,1.8-.17,4.26-.14,9.83.09,11.28,2.03,59.8,3.84,92.13,1.69,30.31,11.79,53.79,17.67,65.1,9.04,17.41,18.51,26.52,23.19,26.52.18,0,.35.03.52.07.16-.04.34-.07.52-.07,4.68,0,14.15-9.11,23.19-26.52,5.88-11.31,15.98-34.79,17.67-65.1,1.8-32.35,3.75-80.86,3.84-92.13.04-5.57-.06-8.03-.15-9.83-.06-1.68-.12-2.89-.03-5.45.37-10.24,2.13-16.68,3.41-21.39ZM332.41,560.61c0,.98-.81,1.77-1.81,1.77-.11,0-.21,0-.31-.03-.1.02-.2.03-.31.03-1.01,0-1.81-.79-1.81-1.77v-66.54c0-.97.81-1.77,1.81-1.77.11,0,.21,0,.31.03.1-.02.2-.03.31-.03,1.01,0,1.81.79,1.81,1.77v66.54ZM358.61,468.94c-5.06-.12-18.38,1.36-22.98,2.55-3.24.84-3.23,6.42-3.22,11.32v.79c0,.97-.81,1.77-1.81,1.77-.11,0-.21,0-.31-.03-.1.02-.2.03-.31.03-1.01,0-1.81-.79-1.81-1.77v-.79c0-4.91.02-10.49-3.22-11.32-4.6-1.19-17.92-2.67-22.98-2.55-.98,0-1.83-.74-1.86-1.72-.03-.97.77-1.78,1.77-1.81,5.4-.13,19.09,1.39,24.01,2.67,2.16.56,3.53,1.89,4.4,3.64.87-1.75,2.24-3.08,4.4-3.64,4.92-1.28,18.63-2.8,24.01-2.67,1,.03,1.8.84,1.77,1.81-.03.98-.83,1.76-1.86,1.72ZM365.71,462.75c-4.82.19-8.2.47-11.18.71-3.73.3-6.86.56-11.42.56-1.49,0-3.11-.03-4.97-.09-.03,0-.06,0-.09,0-4.3-.36-6.58-1.94-7.76-5.43-1.2,3.49-3.46,5.07-7.76,5.43-.03,0-.06,0-.09,0-1.86.06-3.49.09-4.97.09-4.56,0-7.69-.26-11.42-.56-2.98-.24-6.36-.51-11.18-.71-1.01-.04-1.79-.86-1.74-1.84.05-.98.9-1.74,1.89-1.69,4.91.2,8.32.48,11.34.72,4.81.38,8.62.69,15.92.45,4.43-.38,5.7-1.25,5.7-17.3,0-.97.82-1.77,1.81-1.77.18,0,.35.03.52.07.16-.04.34-.07.52-.07,1,0,1.81.79,1.81,1.77,0,16.05,1.27,16.92,5.7,17.3,7.31.24,11.11-.07,15.92-.45,3.02-.25,6.43-.52,11.34-.72,1.02-.05,1.84.71,1.89,1.69.05.97-.73,1.79-1.74,1.84ZM301.68,417.07c4.92-.65,13.15-1.74,20.5-1.62,4.56.07,6.91,2.1,8.12,4.96,1.21-2.86,3.56-4.89,8.12-4.96,7.34-.11,15.58.97,20.5,1.62.99.13,1.69,1.02,1.55,1.99-.14.96-1.06,1.64-2.04,1.51-4.82-.64-12.88-1.7-19.95-1.59-4.64.07-5.84,2.52-5.84,11.95,0,.97-.82,1.77-1.81,1.77-.18,0-.35-.03-.52-.07-.16.04-.34.07-.52.07-1,0-1.81-.79-1.81-1.77,0-9.43-1.2-11.88-5.84-11.95-7.07-.11-15.14.95-19.95,1.59-.99.13-1.9-.55-2.04-1.51-.14-.97.56-1.85,1.55-1.99ZM367,415.51l-1.28.02c-3.07.06-6.09.11-9.03.11-9.92,0-18.72-.64-24.09-4.12-1.01-.65-1.76-1.48-2.31-2.47-.55.99-1.31,1.82-2.31,2.47-5.37,3.48-14.17,4.12-24.09,4.12-2.94,0-5.97-.05-9.03-.11l-1.28-.02c-1-.02-1.8-.83-1.78-1.8.02-.97.88-1.76,1.85-1.73l1.27.03c12.88.24,25.03.47,31.05-3.42,2.44-1.59,2.29-6.64,2.1-12.48-.05-1.74-.11-3.54-.11-5.43,0-.97.82-1.77,1.81-1.77.18,0,.35.03.52.07.16-.04.34-.07.52-.07,1,0,1.81.79,1.81,1.77,0,1.89-.06,3.68-.11,5.42-.19,5.85-.34,10.9,2.1,12.49,6.02,3.89,18.17,3.66,31.05,3.42l1.27-.03c.99-.03,1.83.76,1.85,1.73.02.97-.78,1.78-1.78,1.8ZM301.4,368.36l1.06-.32c4.84-1.46,12.95-3.9,19.9-2.55,4.41.86,6.72,3.01,7.94,5.72,1.22-2.71,3.53-4.86,7.94-5.72,6.95-1.36,15.05,1.09,19.9,2.55l1.06.32c.96.29,1.51,1.27,1.21,2.21-.29.94-1.31,1.46-2.26,1.17l-1.09-.33c-4.51-1.36-12.06-3.64-18.11-2.46-5.34,1.04-6.31,4.42-6.31,10.7,0,.97-.82,1.77-1.81,1.77-.18,0-.35-.03-.52-.07-.16.04-.34.07-.52.07-1,0-1.81-.79-1.81-1.77,0-6.28-.97-9.66-6.31-10.7-6.05-1.17-13.6,1.1-18.11,2.46l-1.09.33c-.95.28-1.97-.24-2.26-1.17-.3-.94.24-1.92,1.21-2.21ZM371.09,368.62c-.25.73-.96,1.19-1.71,1.19-.19,0-.39-.03-.59-.1-12.23-4.07-20.54-6.53-32.59-6.25-3.13-.02-4.91-1.9-5.9-4.87-.99,2.97-2.74,4.85-5.86,4.87-12.13-.28-20.41,2.18-32.64,6.25-.2.07-.4.1-.59.1-.75,0-1.46-.46-1.71-1.19-.33-.93.18-1.92,1.12-2.24,12.62-4.2,21.21-6.73,33.85-6.44,3.49-.02,3.49-8.97,3.49-16.87,0-.98.82-1.77,1.81-1.77.18,0,.35.03.52.07.16-.04.34-.07.52-.07,1,0,1.81.79,1.81,1.77,0,7.9,0,16.85,3.54,16.87,12.61-.28,21.19,2.24,33.81,6.44.94.32,1.45,1.32,1.12,2.24Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="forearms" >
                    <path d="M613.57,477.34c.16,4.29-.48,10.26-4.48,14.26-3.87,3.89-9.77,4.12-14.42,3.49h0c-2.78-2.39-6.15-5.13-10.18-8.28-1.42-1.11-2.92-2.27-4.51-3.5-11.9-9.18-28.19-21.76-53.85-48.72-3.79-3.98-5.27-5.67-6.99-7.62-1.02-1.16-2.12-2.42-3.84-4.3-3.83-4.2-5.83-7.02-7.66-9.95-.77-1.23-1.56-2.89-2.48-4.83-1.47-3.12-3.29-7-6.09-11.27-.6-.91-1.41-2.21-2.44-3.83-.04-.06-.08-.12-.12-.19,6.57,4.64,13.49,7.71,19.25,7.71,2.84,0,5.4-.74,7.49-2.39,4.87-3.85,10.39-13.38,1.74-36.38,12.13,16.24,21.48,24.2,29.82,31.31,8.55,7.27,15.93,13.55,24.9,26.96,14.17,21.18,27.24,44.65,33.96,56.87-.08.2-.12.42-.11.65Z">
                    </path>
                    <path data-name="forearms" d="M164.07,392.62c-.05.07-.08.12-.13.19-1.02,1.62-1.83,2.91-2.43,3.82-2.8,4.27-4.63,8.16-6.09,11.27-.92,1.93-1.7,3.6-2.48,4.84-1.83,2.92-3.84,5.73-7.66,9.94-1.71,1.88-2.82,3.14-3.84,4.3-1.72,1.95-3.2,3.64-6.99,7.62-25.66,26.95-41.95,39.53-53.85,48.72-1.58,1.23-3.08,2.38-4.51,3.5-4.03,3.15-7.39,5.89-10.18,8.28h0c-4.65.64-10.55.41-14.43-3.49-3.99-4.01-4.64-9.97-4.48-14.26,0-.22-.03-.44-.11-.64,6.71-12.22,19.8-35.69,33.97-56.88,8.97-13.42,16.35-19.69,24.9-26.96,8.34-7.1,17.7-15.07,29.84-31.33-8.67,23.02-3.15,32.56,1.72,36.41,2.1,1.65,4.65,2.39,7.49,2.39,5.77,0,12.69-3.06,19.25-7.71Z" stroke-width="0">
                    </path>
                </g>
                <g className="body-map__muscle " id="biceps" >
                    <path d="M223.95,308.76s0,.02,0,.03c-.54,1.32-5.67,13.33-23.43,33.55-12.21,13.89-22.7,29.05-29.97,40.18,0,0,0,0,0,.02-11.64,11.56-25.14,17.21-30.92,12.66-4.21-3.32-11.79-15.02,8.62-51.98.15-.27.3-.55.45-.82,0,0,.02-.03.02-.04,0-.02.03-.04.04-.06,1.57-2.52,2.9-4.78,4.1-6.89,0,0,0-.02.02-.04,1.29-2.04,2.64-4.06,4.04-6.05.04-.04.06-.08.1-.12,19.9-27.58,36.29-36.71,44.8-39.72.4-.11.82-.21,1.24-.33,1.61-.43,3.3-.88,5.1-1.18h0c4.32-.41,9.9-.1,13.27,3.41,3.25,3.37,4.1,9.22,2.54,17.4Z">
                    </path>
                    <path d="M520.97,395.19c-5.79,4.55-19.27-1.08-30.9-12.64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-7.27-11.14-17.77-26.3-29.97-40.18-17.89-20.37-22.96-32.39-23.43-33.57,0-.02-.02-.04-.02-.05,0,0,0-.03,0-.04-1.53-8.13-.67-13.95,2.56-17.31,3.36-3.5,8.92-3.82,13.24-3.41h.02c1.8.29,3.5.75,5.11,1.18.44.11.86.23,1.26.34.03,0,.06.02.09.03,8.53,3.04,24.89,12.21,44.7,39.68.04.04.06.09.1.12,1.41,2,2.77,4.04,4.06,6.1h0c1.22,2.14,2.56,4.42,4.14,6.98,0,.02.02.03.03.04h0s.04.06.05.09c.13.23.25.46.38.69,20.41,36.95,12.82,48.66,8.62,51.98Z">
                    </path>
                    <path d="M225.68,309.3s.02-.02.02-.04c4.51-23.27-10.8-23.89-18.45-22.99-7.63.9-27.35,8.09-51.74,41.89-.02.02-.04.02-.04.04-3.36,4.77-6.29,9.5-8.84,14.17-20.83,37.72-13.32,50.11-8.16,54.18,7.32,5.78,23.15-1.71,35.45-14.96" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                </g>
                <g className="body-map__muscle " id="chest" data-muscle="Chest">
                    <path d="M455.62,284.87c-.83-.18-1.53-.28-2.09-.34-.2-.03-.4-.04-.6-.06-5.94-.96-13.28-.45-20.7,7.31-4.87,5.08-8.35,10.33-11.42,14.95-2.47,3.72-4.66,7.04-7.18,9.8,0,0-.03.02-.04.03-.07.07-.14.14-.19.21-.02.02-.03.04-.05.05-2.57,2.72-5.45,4.86-9.28,6.24-9.27,3.32-42.14-.19-59.96-12.27-7.77-5.28-11.72-11.5-11.72-18.5v-50.08c0-3.72,1.51-7.02,4.48-9.79,4.47-4.17,14.27-8.91,35.74-8.82.37.04.75.06,1.15.06,1.37,0,2.66.02,3.86.04.11,0,.22,0,.33,0,.16,0,.33,0,.5.02h.09c13.51.43,17.09,2.85,22.62,7.41,0,0,.02.02.03.02,10.52,9.43,29.47,27.18,54.41,53.71Z">
                    </path>
                    <path d="M328.17,242.21v50.08c0,7-3.95,13.22-11.72,18.5-17.81,12.09-50.7,15.59-59.95,12.27-3.83-1.38-6.72-3.52-9.29-6.24-.02-.03-.04-.04-.05-.06-.05-.06-.12-.14-.16-.19,0,0-.03-.03-.04-.03,0,0,0,0,0,0-2.53-2.75-4.72-6.08-7.19-9.81-3.07-4.62-6.55-9.87-11.42-14.95-7.44-7.76-14.77-8.27-20.71-7.31h0c-.19.02-.38.04-.58.06-.55.06-1.25.17-2.09.34,24.94-26.53,43.89-44.28,54.41-53.71,0,0,.02,0,.03-.02,5.53-4.56,9.11-6.98,22.62-7.41h.09c.17,0,.34,0,.5-.02.11,0,.22,0,.33,0,1.21-.03,2.49-.04,3.86-.04.4,0,.78-.02,1.15-.06,21.47-.09,31.27,4.64,35.74,8.82,2.97,2.77,4.48,6.07,4.48,9.79Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="front-shoulders" data-muscle="Front Shoulders">
                    <path d="M492.35,309.68c-12.28-13.25-22.58-19.56-29.7-22.55h0c-29.32-31.51-51.01-51.53-61.48-60.8.08-.05.2-.1.36-.12,21.23-2.86,27.56-3.57,29.36-3.75.18-.02.36-.03.55-.04.04,0,.07,0,.11,0,8.02-.48,19.08.57,28.22,11.34,11,13.34,16.9,33.09,21.64,48.96,1.72,5.75,3.35,11.19,4.98,15.46,1.83,4.77,3.78,8.16,5.97,11.52Z">
                    </path>
                    <path d="M259.41,226.33c-.73.65-1.51,1.35-2.37,2.13-.05.04-.1.09-.15.13-11.16,10.01-31.79,29.35-58.95,58.53-7.12,2.99-17.43,9.29-29.72,22.56,2.18-3.35,4.14-6.74,5.97-11.52,1.63-4.27,3.26-9.71,4.98-15.46,4.74-15.87,10.64-35.62,21.62-48.94,9.3-10.93,20.53-11.86,28.58-11.33.03,0,.05,0,.07,0,1.4.13,7.19.76,29.61,3.77.16.03.28.07.36.12Z">
                    </path>
                </g>
                <g className="body-map__muscle " id="traps" >
                    <path d="M413.86,221.01c-3.63.47-7.88,1.03-12.82,1.7-1.27.17-2.37.83-2.99,1.76-4.43-2.63-9.56-3.96-19.42-4.26-.14,0-.28,0-.42-.02-1.79-.07-3.52-.11-5.21-.11-.86-.19-1.7-1.05-2.53-4.76-.93-4.11-1.61-10.86-2.1-21.16,1.55,2.46,3.3,4.91,4.72,6.88.64.89,1.17,1.63,1.52,2.17,1.86,2.75,26.19,13.15,39.24,17.8Z">
                    </path>
                    <path d="M292.2,194.15c-.49,10.31-1.16,17.05-2.09,21.16-.83,3.71-1.67,4.56-2.53,4.76-1.69,0-3.42.04-5.21.11-.14,0-.28,0-.42.02-9.86.3-14.98,1.63-19.42,4.26-.63-.93-1.72-1.59-2.99-1.76-4.95-.67-9.21-1.24-12.83-1.7,13.05-4.64,37.39-15.05,39.25-17.8.35-.54.89-1.29,1.52-2.17,1.41-1.97,3.17-4.42,4.72-6.88Z">
                    </path>
                </g>
                <g id="body" className="body-map__model">
                    <g>
                        <path d="M45.19,477.27c-.19,4.9.64,11.2,4.99,15.56,4.82,4.84,12.11,4.7,17.22,3.82h.02" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M229.09,220.64s1.82,0,30.21,3.82c1.76.24,2.75,1.93,1.43,3.09-9.4,8.31-31.62,28.69-61.72,61.05" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M294.59,160.7c.02.37.04.77.04,1.18.11,2.62.13,5.76.05,9.4v.37c-.05,2.53-.11,4.93-.14,7.2-.02.12-.02.23-.02.33-.99,40.41-3.47,42.72-7.72,42.72-17.85,0-21.96,2.45-28.58,7.9" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M200.88,287.88c6.38-1.6,16.06-5.42,26.14,5.09,12.52,13.06,15.41,26.92,28.86,31.73,13.15,4.71,74.11-3.56,74.11-32.43v-50.08c0-10.45-10.91-21.75-47.95-20.24" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M245.7,317.8s.05.07.09.11c4.11,5.02,11.85,12.74,26.06,26.24,19.62,18.62,6.31,33.12,4.83,103.04-.49,23.16-2.68,50.62-32.12,52.01-7.89.37-13.4-.77-17.24-2.69" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M227.26,496.73c13.71,4.51,32.97,5.65,46.48,32.63,31.54,62.98,56.25,64.72,56.25,80.31" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M283.56,797.29s-11.45,62.4-27.2,60.23c-19.5-2.68-7.39-52.28-31.2-35.79-11.62,8.04-16.22-34.64-17.31-51.29" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M199.33,874.17c3.71,2.38,8.37,5.49,8.99,13.45,1.56,20.19,15.34,20.63,23.37,21.54,14.96,1.69,23.42-3.12,27-13.96" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                    </g>
                    <g>
                        <path d="M329.78,331.68c0-16.4-22.02-9.26-30.74-5.57-9.48,4.01-17.1,8.53-19.6,14.99-3.01,7.76,3.26,12.56,4,32.96.19,5.31-.25,4.63-.17,15.24.08,11.06,2.03,59.75,3.84,92.21,2.85,51.09,30.55,93.29,42.67,93.29" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M291.2,368.05c12.44-4.14,20.9-6.63,33.23-6.35,5.35-.02,5.35-8.97,5.35-18.63" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M293.62,413.75c13.83.25,26.66.64,33.36-3.7,4.13-2.68,2.8-10.32,2.8-19.37" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M294.94,460.98c12.8.52,15.43,1.57,27.43,1.18,6.4-.54,7.4-3.66,7.4-19.06" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M301.92,370.06c4.32-1.28,13.04-4.2,20.08-2.83s7.78,6.49,7.78,12.43" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M301.92,418.82c5.68-.75,13.28-1.71,20.22-1.61,6.94.11,7.63,5.36,7.63,13.72" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <line x1="329.98" y1="494.08" x2="329.98" y2="560.62" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </line>
                        <path d="M301.92,467.17c5.2-.12,18.71,1.37,23.5,2.61,4.79,1.24,4.56,7.96,4.56,13.81" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                    </g>
                    <path d="M24.03,558.61s-3.51,7.17-4.34,9.48-3.07,8.34-3.08,10.92c0,2.58,10.02,19.71-.68,20.32" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M434.89,309.3s-.02-.02-.02-.04c-4.51-23.27,10.8-23.89,18.45-22.99,7.63.9,27.35,8.09,51.74,41.89.02.02.04.02.04.04,3.36,4.77,6.29,9.5,8.84,14.17,20.83,37.72,13.32,50.11,8.16,54.18-7.32,5.78-23.15-1.71-35.45-14.96" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M615.39,477.27c.19,4.9-.64,11.2-4.99,15.56-4.82,4.84-12.11,4.7-17.22,3.82h-.02" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M431.49,220.64s-1.82,0-30.21,3.82c-1.76.24-2.75,1.93-1.43,3.09,9.4,8.31,31.62,28.69,61.72,61.05" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M365.99,160.7c-.02.37-.04.77-.04,1.18-.11,2.62-.13,5.76-.05,9.4v.37c.05,2.53.11,4.93.14,7.2.02.12.02.23.02.33.99,40.41,3.47,42.72,7.72,42.72,17.85,0,21.96,2.45,28.58,7.9" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M459.7,287.88c-6.38-1.6-16.06-5.42-26.14,5.09-12.52,13.06-15.41,26.92-28.86,31.73-13.15,4.71-74.11-3.56-74.11-32.43v-50.08c0-10.45,10.91-21.75,47.95-20.24" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M414.87,317.8s-.05.07-.09.11c-4.11,5.02-11.85,12.74-26.06,26.24-19.62,18.62-6.31,33.12-4.83,103.04.49,23.16,2.68,50.62,32.12,52.01,7.89.37,13.4-.77,17.24-2.69" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M433.32,496.73c-13.71,4.51-32.97,5.65-46.48,32.63-31.54,62.98-56.25,64.72-56.25,80.31" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M377.02,797.29s11.45,62.4,27.2,60.23c19.5-2.68,7.39-52.28,31.2-35.79,11.62,8.04,16.22-34.64,17.31-51.29" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M461.25,874.17c-3.71,2.38-8.37,5.49-8.99,13.45-1.56,20.19-15.34,20.63-23.37,21.54-14.96,1.69-23.42-3.12-27-13.96" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <g>
                        <path d="M330.8,331.68c0-16.4,22.02-9.26,30.74-5.57,9.48,4.01,17.1,8.53,19.6,14.99,3.01,7.76-3.26,12.56-4,32.96-.19,5.31.25,4.63.17,15.24-.08,11.06-2.03,59.75-3.84,92.21-2.85,51.09-30.55,93.29-42.67,93.29" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M369.38,368.05c-12.44-4.14-20.9-6.63-33.23-6.35-5.35-.02-5.35-8.97-5.35-18.63" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M366.96,413.75c-13.83.25-26.66.64-33.36-3.7-4.13-2.68-2.8-10.32-2.8-19.37" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M365.64,460.98c-12.8.52-15.43,1.57-27.43,1.18-6.4-.54-7.4-3.66-7.4-19.06" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M358.66,370.06c-4.32-1.28-13.04-4.2-20.08-2.83-7.04,1.37-7.78,6.49-7.78,12.43" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M358.66,418.82c-5.68-.75-13.28-1.71-20.22-1.61-6.94.11-7.63,5.36-7.63,13.72" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <line x1="330.6" y1="494.08" x2="330.6" y2="560.62" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </line>
                        <path d="M358.66,467.17c-5.2-.12-18.71,1.37-23.5,2.61-4.79,1.24-4.56,7.96-4.56,13.81" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                    </g>
                    <path d="M636.55,558.61s3.51,7.17,4.34,9.48c.83,2.31,3.07,8.34,3.08,10.92,0,2.58-10.02,19.71.68,20.32" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M330.6,609.69c2.86,0,12.73,4.33,14.76,21.28,2.03,16.95,10.53,62.07,18.84,92.02,8.3,29.96,14.98,89.07,15.38,101.29,0,27.19,13.78,48.08,15.19,50.64,1.41,2.56,7.24,20.65,7.24,20.65-7.16,68.45,6.85,86.01,10.28,99.64,4.66,41.48,17.94,98.89,13.24,114.03-4.71,15.15.67,13.72.55,16.67-.11,2.94.12,9.91,1.23,16.56,1.12,6.65-1.68,11.99-1.45,17.43,1.45,12.09,12.09,10.46,11.97,14.48-2.46,18.53,16.65,20.7,16.65,20.7,9.51,13.16,21.4,2.91,21.4,2.91,7.88,2.64,10.4-1.99,10.4-1.99,7.14.4,7.27-3.11,7.27-3.11,5.57,1.19,7.49-4.25,7.49-4.25,5.63-5.62-.33-12.9-2.41-15.94-2.08-3.04-15.07-17.7-16.89-20.49-1.82-2.78-11.7-14.92-20.79-36.66-9.1-21.76,3.33-99.12,3.33-99.12,17.39-116.16-4.74-137.7-10.75-168.53-1.02-5.18-5.41-20.14-4.7-31.3,6.67-75.56,13.69-172.32,11.59-209.24-2.1-36.93-20.25-89.32-20.25-89.32-4.2-17.03-6.56-20.01-8.25-24.83-5.44-18.32-19.92-51.63-21.78-61.32-1.86-9.69-.46-28.31.16-30.44.62-2.12,4.51-24.07,8.24-32.7s10.74-40.58,11.51-43.91c.78-3.34,4.82-15.6,4.82-15.6,0,0,4.52,12.27,23.81,34.23,19.29,21.95,34.63,47.65,38.84,54.09,4.5,6.87,6.44,12.71,8.55,16.08,1.94,3.09,4.04,6,7.85,10.19,4.66,5.12,4.85,5.62,10.86,11.94,29.22,30.69,46.58,43,58.55,52.39,11.97,9.39,20.33,16.68,20.93,20.48,0,6.02-3.94,16.29-1.75,22.59,2.19,6.29,1.53,6.99,2.9,12.54,1.38,5.56,6.07,9.09,7.53,15.26.62,12.07.87,16.76,3.85,18.6s8.7,2.85,10.69-3c2-5.85-1.39-13.82-1.42-15.76s.18-7.95.18-7.95c0,0,3.19,1.54,5.23,3.24,6.43,4.81,11.83,12.14,11.83,12.14,2.69,3.77,4.56,10.16,4.56,10.16-.36,7.23.68,10.43-2.62,20.52s5.19,10.27,5.89,8.16,2.4-5.53,2.4-5.53c6.87-10.28,5.02-22.99,5.02-22.99-1.54-9.54-3.49-22.57-3.49-22.57-6.2-20.01-21.22-45.52-22.51-47.7-1.28-2.19-3.06-8.27-5.53-12.33-2.48-4.07-7.17-9.91-7.17-9.91-2.52-4.25-19.51-36.68-38.62-65.26-19.12-28.57-32.02-26.04-58.38-63.3-12.41-17.54-15.2-24.42-20.82-34.11-6.2-10.67-10.28-14.29-13.96-23.9-6-15.7-11.55-46.3-26.9-64.91-14.89-17.52-34.35-10.71-39.58-11.14-5.22-.43-43.58-16.44-45.46-19.26-1.9-2.82-8.45-11.25-9.56-15.8-.26-1.91-.44-4.82-.55-8.2v-.04c-.06-1.99-.11-4.15-.14-6.35,0-.2,0-.41,0-.6-.02-3.15,0-6.37.05-9.35,0-.29,0-.57.02-.85.1-4.61.29-8.52.56-10.48" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M379.61,97.79s10.76-3.74,9.77,12.16c-1.01,15.9-9.79,23.04-15.57,19.9" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M280.97,97.79s-10.76-3.74-9.77,12.16c1.01,15.9,9.79,23.04,15.57,19.9" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M294.05,150.59c.27,1.96.46,5.87.56,10.48,0,.27,0,.56.02.85.06,3.18.08,6.65.05,10v.32c-.02,2.07-.06,4.1-.13,5.98v.04c-.11,3.38-.29,6.29-.55,8.2-1.11,4.55-7.66,12.98-9.56,15.8-1.89,2.82-40.24,18.83-45.46,19.26-5.22.43-24.69-6.38-39.58,11.14-15.34,18.61-20.9,49.21-26.91,64.91-3.67,9.61-7.74,13.23-13.95,23.9-5.62,9.69-8.42,16.58-20.82,34.11-26.35,37.26-39.26,34.73-58.38,63.3-19.11,28.58-36.09,61.01-38.62,65.26,0,0-4.7,5.84-7.17,9.91-2.48,4.06-4.25,10.14-5.53,12.33-1.29,2.19-16.31,27.7-22.51,47.7,0,0-1.95,13.03-3.49,22.57,0,0-1.85,12.71,5.02,22.99,0,0,1.7,3.41,2.4,5.53s9.2,1.93,5.89-8.16c-3.3-10.09-2.26-13.29-2.62-20.52,0,0,1.87-6.39,4.56-10.16,0,0,5.4-7.33,11.83-12.14,2.04-1.7,5.23-3.24,5.23-3.24,0,0,.22,6.01.18,7.95s-3.42,9.91-1.42,15.76c2,5.85,7.72,4.84,10.69,3s3.23-6.53,3.85-18.6c1.46-6.17,6.15-9.7,7.53-15.26,1.37-5.55.72-6.25,2.9-12.54,2.19-6.3-1.75-16.58-1.75-22.59.6-3.8,8.96-11.09,20.93-20.48,11.97-9.39,29.33-21.7,58.55-52.39,6-6.32,6.19-6.82,10.86-11.94,3.81-4.19,5.91-7.1,7.85-10.19,2.11-3.37,4.05-9.21,8.55-16.08,4.22-6.44,19.55-32.14,38.84-54.09,19.29-21.96,23.81-34.23,23.81-34.23,0,0,4.04,12.27,4.82,15.6.77,3.33,7.77,35.28,11.51,43.91,3.74,8.63,7.63,30.58,8.24,32.7.63,2.13,2.02,20.75.16,30.44-1.87,9.69-16.34,43-21.78,61.32-1.7,4.82-4.05,7.8-8.25,24.83,0,0-18.15,52.39-20.25,89.32-2.1,36.92,4.92,133.68,11.59,209.24.71,11.16-3.68,26.12-4.7,31.3-6,30.83-28.13,52.37-10.75,168.53,0,0,12.42,77.36,3.33,99.12-9.09,21.75-18.96,33.88-20.79,36.66-1.81,2.78-14.81,17.45-16.89,20.49-2.09,3.04-8.04,10.32-2.41,15.94,0,0,1.92,5.44,7.49,4.25,0,0,.14,3.5,7.27,3.11,0,0,2.52,4.62,10.4,1.99,0,0,11.89,10.25,21.4-2.91,0,0,19.11-2.17,16.65-20.7-.12-4.02,10.52-2.39,11.97-14.48.23-5.45-2.58-10.79-1.45-17.43,1.12-6.65,1.34-13.62,1.23-16.56-.12-2.95,5.26-1.53.55-16.67-4.7-15.15,8.58-72.55,13.24-114.03,3.43-13.63,17.43-31.19,10.28-99.64,0,0,5.82-18.09,7.24-20.65,1.41-2.57,15.19-23.45,15.19-50.64.4-12.22,7.08-71.33,15.38-101.29,8.31-29.95,16.8-75.07,18.84-92.02,2.02-16.95,11.9-21.28,14.76-21.28" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <g>
                        <path d="M367,149.3s-5.6,19.62-36.4,24.98" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                        <path d="M293.57,149.3s5.6,19.62,36.4,24.98" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                        </path>
                    </g>
                    <path d="M297.76,13.4l-.11.03c-1.4.39-2.78.79-4.07,1.36-31.24,13.79-34.54,60.58-30.56,97.35,1.61,14.85,9.91,42.02,24.09,62.13,6.84,9.7,12.68-21.42-.33-44.42-6.1-10.79-7.31-23.38-5.8-32.06,4.05-23.49,14.76-32.83,30.62-44.47" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M296.55,17.72c-.18-16.2,43.7-19.12,62.07-12.9,35.89,12.16,48.86,58.31,46.26,92.58-2.03,26.7-8.66,47.75-29.13,79.19-7.44,11.44-15.83-25.4-1.95-46.74,6.65-10.22,5.8-19.31,5.8-32.07,0-28.77-46.58-23.9-72.69-48.38" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M328.54,37.06c8.1,12.59,17.04,19.33,29.18,25.88,20.83,11.22,23.06,21.93,21.91,44.13" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M364.43,47.89c3.82,10.01,17.37,32.08,15.21,54.64" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                    <path d="M294.97,54.31c-9.45,8.76-14.9,30.21-14.5,51.24" fill="none" stroke="#484a68" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.58">
                    </path>
                </g>
            </svg>
        </div>
    );
}

export default ModelFrontFemale;