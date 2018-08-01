# Robots Exercise

This is an interactive exercise which teaches Lean concepts.
Participants play the role of employees of the "Acme Robot Head Co."
who are divided up into teams to create "robot heads" by cutting and gluing paper.

* **Time required:** 60 min
* **Team size:** 4-7 people per team
* **Supplies needed per team:**
    * 35 sheets of blue paper
    * 25 sheets of green paper
    * 15 sheets of yellow paper
    * 10 sheets of red paper
    * 30 sheets of white paper, pre-cut into 60 half-sheets
    * 4 scissors
    * 2 glue sticks
    * 1 pen
    * 2 markers / sharpies
    * 1 printed [balance sheet](balance-sheet.pdf)
    * A workspace (team table/desks and chairs)

You will also need a computer with a large screen (or projector) to display the provided [slides](https://docs.google.com/presentation/d/1d-DGIpf_Fes-MLgpDVtC3BKI_lkYrh423OK0Kw9CDoY/edit?usp=sharing) and `timer.html` to all the teams.

> _Note: 8.5" x 11" (letter) sized sheets of paper are recommended, but the exercise may work fine with other sizes._

Principles to learn:
* focusing on delivering value rather than being busy
* reducing / eliminating waste
* pull vs. push based processes
* work-in-progress (WIP) limits
* addressing bottlenecks
* how lean concepts can be applied to software development teams

This exercise was inspired by another we found online: [Mr. Happy Face](http://www.leansimulations.org/2010/11/mr-happy-face-showing-difference.html).


## Running the Exercise


### Overview

After dividing up into teams and handing out the supplies, the teams will build robot heads in 3 distinct 5-minute phases. Each team member will be given a specific role.

The provided `timer.html` page displays a timer, images of the required robot heads, and the projected customer demand for heads.
At the end of each phase, they'll earn money for the number of heads they were able to sell and lose money for wasted materials.

During the first phase, teams will be encouraged to always be busy (maximize resource efficiency) which should generate waste, and possibly a net loss of money.

In the second phase, teams will be encouraged to use Lean pull-based concepts in order to limit waste and improve profit.

For the third phase, teams are allowed to work cross-functionally to resolve their bottlenecks and are given additional customer feedback during the 5 minutes.

After the third phase, the entire group will be given time to ask questions and discuss what they learned from the exercise.


### Setup (~10 min)

Start the provided [slide deck](https://docs.google.com/presentation/d/1d-DGIpf_Fes-MLgpDVtC3BKI_lkYrh423OK0Kw9CDoY/edit?usp=sharing) and welcome the participants.
Divide the participants into roughly-even teams of no more than 7 people each.
Have each team gather at their workspace and provide them with their needed supplies (except for the balance sheets which you will hand out later).

Tell the teams that they have been hired to work at the **Acme Robot Head Co.** to build and sell robot heads.
Explain that each team needs to fill the following roles:

> _**Tip:** The slide deck contains helpful slides to display for each role._

* **Designer** - this person will draw a _spec_ for each robot head the team will create.
This is done by taking a half-sheet of white paper and using a marker to draw the desired _model_ of robot head matching one of the models displayed on the screen.
* **Head builder** - this person will cut out the robot head structures from colored paper, sized at roughly half a sheet of paper.
* **Eye builders** - these _**two**_ people will cut out eyes for the robots from the colored paper.
Eye size should be appropriate for the half-sheet sized robot head.
Each eye builder should only cut one of the two eye shapes shown on the screen.
* **Mouth builder** - this person will cut out mouths for the robots out of colored paper matching the two mouth shapes displayed on the screen.
Mouths should be sized appropriately for the half-sheet sized robot head.
* **Assembler** - this person will take a spec from the designer, gather the required head, eyes, and mouth to build that robot head, then glue the eyes and mouth to the head.
* **Inspector** - this person will compare each completed (glued together) robot head to the spec and look for defects.
If there are no defects, they will use a marker to sign their initials on the back of the robot head and then put into a "for sale" pile.
Defective robot heads are set into a "defects" pile.
The defects to look for are:
    * Specs / heads that do not match the models displayed on the screen.
    * Heads that do not match the colors shown on the screen.
    * Robot heads that do not match the drawn spec (wrong head, eye, or mouth shapes).
    * Torn, bent, or otherwise damaged robot heads.
    
Have each team identify who will be doing each role and have them pick up the supplies needed for their role.

> _If there are less than 7 people on a team, you can have some people combine roles. The recommended order to combine roles is:_
> 1. _Designer & Inspector_
> 2. _Head & mouth builder_
> 3. _Have one eye builder build both types of eyes_
>
> _The exercise does not work well with less than 4 people on a team._

Rules:
* Do not cut more than one piece of paper at a time.
* Do not fold any paper.
* Do not do any work until the timer has been started.


### Phase 1 (~10 min)

The facilitator should now display the `timer.html` page on the screen.
Tell the teams that the four robot head models on the screen are the ones that our market research department has identified for them to build.

Underneath each model is information about projected customer demand: how many of each head are desired and the expected sell price.

> _Example: if the text under a robot head says `10 @ $500` then there is customer demand for 10 heads of that model and each will sell for $500._
> _Additional heads of that model (i.e. the 11th and on) will not earn any money because there are no buyers._

When the teams are ready, start the timer.

> _Note: Timer controls are in the top left of the screen._
> _They are faded out unless you hover over them so they avoid distracting the teams._

Encourage the team members to work hard on their assigned role and stay busy.
Reassure them that they will be needing a lot of robots so they should work quickly and not worry about excess parts ("We'll use them later," you'll say).

Half-way through the alloted time (at 2:30) the display will show updated customer demand.
Point this out to the teams and encourage them to keep working hard.
"We don't pay you to sit idle!"
"Quality is job #1!"

When the timer reaches 0:00, tell everyone to stop working
(put scissors, paper, and markers all down).
Note to the teams that the customer demand has been updated on the screen;
these final values are what we will sell at.

Hand each team a [balance sheet](balance-sheet.pdf) and have them use their pen to fill it out (instructions are written on the sheet).
Most teams should have excess parts (including completed heads that could not be sold because they made more than customer demand) and may even go negative for profit.
Assure them that it will be okay, because we can always sell that excess inventory for a profit in later quarters...


### Phase 2 (~10 min)

Click the "Phase 2" button on the timer, then announce to the teams that our marketing department has provided us with new robot head models to build.
It turns out that red robot eyes are associated with evil, world-dominating robots so our new robots will have green eyes.
We are also introducing yellow heads and triangle-shaped eyes and mouths to give the robots a more happy look.

Unfortunately, this means that the excess parts from Phase 1 will not be usable this quarter.

In order to improve the system and reduce waste, management has decided that we will move to a Lean methodology.
To enable a _pull-baed flow_, we will establish a new process:
1. The designer will continue to create specs.
2. The eye builders will pull a spec (matching their eye shape) from the designer and place eyes on top.
4. Next, the mouth builder will pull the spec & eyes and add the mouth.
3. Then the head builder will pull those items and add a head.
5. The assembler will pull the gathered parts and glue them.
6. The inspector will then pull the assembled head w/ spec, inspect it, and put it aside in either the complete or reject pile.

Additionally, each station will have a work-in-progress (WIP) limit of 2 (eye-builders can build 2 _pairs_ of eyes).
This means that no worker is allowed to create or work on more than that number of things at a time, and must **stop and wait** once they have reached that limit.
The limit includes the items being placed on the spec;
do not create more until that spec has been pulled from you.

Once the teams understand the new rules, start the timer.
As in Phase 1, the prices will update at the middle and the end.

When the timer runs out, have the teams fill out their balance sheet.


### Phase 3 (~10 min)

After clicking the "Phase 3" button on the timer, announce to the teams that marketing has once again provided new robot head models for them to build.
Further customer research has found that blue eyes are ideal.
Shapes and colors have been updated.

Tell the teams that in this (final) phase, we are embracing customer feedback.
The customer demand projections will update more often (not just in the middle and at the end).

Management has also decided that we should allow cross-training and improved collaboration to improve our bottlenecks.
The teams may reorganize roles however they wish, including having multiple people on a role (such as assembler).

When the teams are ready, start the final timer.
This time there will be additional updates of the customer demand.
After about 1 minute, you may want to mention to the teams that demand for model 4 is falling sharply...


As in the prior phases, once the timer ends, the teams should fill out their balance sheet.
They can now also fill our their grand total and see if they were able to turn a profit.


### Retrospective (~20 min)

At the end of the exercise, have the teams discuss what they learned.

Here are some questions the facilitator may want to ask:
* How can Lean concepts such as limiting waste, WIP-limits, and pull-based processes be applied to software development?
* What are some areas of waste in software development?
* What could be considered "inventory" in software development?
* What value does a backlog provide?
