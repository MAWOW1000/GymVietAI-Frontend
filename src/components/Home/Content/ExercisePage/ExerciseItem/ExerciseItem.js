import './ExerciseItem.scss'
import Step from './Step'
const ExerciseItem = () => {
    const exercises = [{
        "ID": 1,
        "Exercise": "Barbell Curl",
        "URL": "https://musclewiki.com/barbell/male/biceps/barbell-curl",
        "Equipment": "Barbell",
        "Difficulty": "Intermediate",
        "Primary Muscle": [],
        "Steps": "1. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.\n2. Continue the movement until your biceps are fully contracted and the bar is at shoulder level.\n3. Hold the contracted position for a second and squeeze the biceps hard.\n4. Slowly bring the weight back down to the starting position.\n",
        "Description": "**Detailed How To:**\n- Grab the barbell with a shoulder width, underhand grip.\n- Flex at the elbows until your forearms press into your bicep (this will look different from person to person).\n- Begin to extend your elbows and control the weight during the eccentric part of the exercise.\n- Make sure to fully extend your elbows at the end of the rep.\n- Repeat until you hit muscular fatigue (1-3 reps left in the tank)\n**Ty's Tips**\nOne of the drawbacks with a Barbell Curl is the bar limits Range of Motion somewhat. The bar will hit your legs before you can fully extend your arms. On most exercises, we want the longest Range or Motion possible. To remedy this,\nPush your butt back a tad bit. This will give you a little more room to fully extend your elbows.\nWatch out for cheating. Using momentum often naturally happens with a Barbell Curl (and most Dumbbell curl variations). There is a move called the Cheat Curl popularized by Arnold himself. But consider that a separate exercise.\nRoot your feet to the floor and use a mirror to watch your form. If your hips begin moving and you're unable to continue to perform reps without any hip movement, end the set.\nA 6-12 rep range works well for this exercise.",
        "Video URL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-curl-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-curl-side.mp4#t=0.1"
        ]
    },
    {
        "ID": 2,
        "Exercise": "Barbell Bent Over Row",
        "URL": "https://musclewiki.com/barbell/male/biceps/barbell-bent-over-row",
        "Equipment": "Barbell",
        "Difficulty": "Intermediate",
        "Primary Muscle": [],
        "Steps": "1. Grab a barbell with a shoulder width pronated or supinated grip.\n2. Bend forward at your hips while maintaining a flat back.\n3. Pull the weight toward your upper abdomen.\n4. Lower the weight in a controlled manner and repeat.\n",
        "Description": "How To Perform The Barbell Row (Supinated) \nSetting Up\nGrab your barbell with an underhand/supinated grip. Stay with feet about shoulder width apart or a little more narrow. Push your butt back and hinge at the hips. Make sure you keep your back flat throughout the entirety of this exercise. Before beginning your set, let your elbows fully extend.\nThe closer your torso is to parallel with the ground. The longer the range of motion will be during your row. The more vertical your torso is, the shorter the range of motion. It's extremely important to hinge as far forward as you can without rounding your back and maintaining that torso position for the entire set.\nPerforming \nPull your elbows straight back toward the ceiling until the bar touches your torso. The bar should land somewhere between your belly button and your rib cage. Use the cue, \"squeeze the tennis ball.\" Imagine you have a tennis ball in your armpits and when you perform each rep try to squeeze that tennis ball.\nOn the eccentric, let your elbows fully extend before initiating the next rep. Ego lifting is very easy to do with the barbell row. If you find yourself having to bounce or use momentum to get the weight from point A to point B, the weight is too heavy. Your torso should maintain its horizontal position for the entire set. ",
        "Video URL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-side.mp4#t=0.1"
        ]
    },
    {
        "ID": 3,
        "Exercise": "Barbell Reverse Curl",
        "URL": "https://musclewiki.com/barbell/male/biceps/barbell-reverse-curl",
        "Equipment": "Barbell",
        "Difficulty": "Advanced",
        "Primary Muscle": [],
        "Steps": "1. Take a double overhand grip that's about shoulder width. Flex your elbows while keeping your elbows tucked in. Try not to let them flare out.\n2. Curl until your forearm presses into your bicep. Then fully extend your elbows at the bottom of each rep.\n",
        "Description": "",
        "Video URL": [
            "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-reverse-curl-front.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-reverse-curl-side.mp4#t=0.1"
        ]
    },]
    return (
        <>
            {exercises.map((exercise, index) => (
                <div key={`exercise ${index}`} className='exerciseItem'>
                    <div className='exerciseItem__header'>
                        <h2 style={{ marginBottom: 0 }}>{exercise.Exercise}</h2>
                    </div>
                    <div className='exerciseItem__video row g-2' style={{ marginTop: "0px" }}>
                        <button className='exerciseItem__video-level'>
                            {exercise.Difficulty}
                        </button>
                        <video style={{ marginTop: "0px" }} loop="true" autoplay="autoplay" playsinline muted className='col-6'>
                            <source src={exercise["Video URL"][0]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video style={{ marginTop: "0px" }} loop="true" autoplay="autoplay" conrt playsinline muted className='col-6'>
                            <source src={exercise["Video URL"][1]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='exerciseItem__step'>
                        <Step steps={exercise.Steps}/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ExerciseItem
