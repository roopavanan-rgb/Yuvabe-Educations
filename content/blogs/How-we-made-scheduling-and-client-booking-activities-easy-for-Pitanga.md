---
title: >-
  How we made scheduling and client booking activities easy for Pitanga
  -Auroville’s cultural center
featuredImage: /images/blogs/pitanga-3.jpg
excerpt: ' As part of Yuvabe’s software development team, I recently built a booking platform for Auroville’s Cultural Centre, Pitanga. It was a unique opportunity to apply and enhance my skills through the project journey that involved requirements gathering, solutioning, implementation and production readiness.'
datePublished: 2022-09-23T18:30:00.000Z
readingTime: 4 mins
category:
  - we-work
  - we-serve
tags:
  - work
  - evolve
---

![Pitanga](/images/blogs/pitanga-2.jpg#lg-center)

As part of Yuvabe’s software development team, I recently built a booking platform for Auroville’s Cultural Centre, Pitanga. It was a unique opportunity to apply and enhance my skills through the project journey that involved requirements gathering, solutioning, implementation and production readiness.

Pitanga, as a designated space for a variety of physical and cultural activities, has been providing regular yoga classes for the last three decades, for the residents of Auroville. The team used Microsoft Excel to keep a track of the schedules and booking transactions, but with more than seven rooms, twenty practitioners and thirty types of activities, it was becoming difficult for the staff to manage scheduling. The team at Pitanga also had no prior experience of using any other software application apart from MS Excel.

After a series of discussions with them, we decided to develop a booking system on Frappe framework that catered specifically to their needs, eliminating the difficulties in booking, scheduling activities and room management. Written in Python and JavaScript, I built various DocTypes on the framework catering to all the scheduling and booking needs. Our end goal was to replace Excel with a more easy to use and efficient system that would greatly reduce their workload.

**Here are some of the key challenges they faced before and the solutions we built for them:**

1. Cancellation of schedules when the practitioner is unavailable – Earlier the admin would manually find each of their schedules in Excel and change its colour to ‘grey’, to signify that the class was cancelled. If the practitioner took multiple types of classes, the same process had to be followed multiple times. With our booking application, the team is now able to fetch the entire schedule of the practitioner and cancel the ones where the respective practitioner is unavailable; all at once.

![Pitanga activity template](/images/blogs/pitanga-4.png#lg-center)

2\. Creating recurring events or classes – Up until now, the admin had to copy paste and create a new Excel sheet for every recurring event as many times as the event occurred. With our application, the team is able to create a recurring event/class for any frequency in just one go. This part of development involved lots of brainstorming, code refixing and many iterations. Our application also provides the facility of filtering between schedules with an integrated calendar view.

![Pitanga schedule calendar](/images/blogs/pitanga-1.png#lg-center)

3\. Adding participants to upcoming schedules of classes/ activities – Earlier, while using Excel, the client had to switch between different sheets and add a participant based on available slots. We have simplified this process by developing a feature where the receptionist could select a participant from the current schedule of events and add it to upcoming events; if the slot is available, the participant status gets confirmed. If there is no slot, the participant gets added to the waitlist.

4\. Notifying a participant about confirmation or changes- Till now, the Pitanga admin or receptionist had to manually make phone calls or email to update or confirm the place for participants. In the new application, the email notification is automated.

5\. Reporting about various events and activities and their popularity – This process was very time consuming and required class details to be calculated and analysed separately from different spreadsheets, every month. In the application we built, the reporting and analysis of different classes is automated as well.

**Training and Go-Live:**

After completing software testing, we arranged one-to-one training sessions for both the admin and receptionist at Pitanga. This process helped us with many modification requests, naming conventions, and new enhancements. Secondly,using filters was particularly challenging for the client. To solve this, I recorded and shared a video of the steps along with screenshots covering various filters for their reference.

Since the process of transitioning the client from their manual processes to an application required relearning and training, providing patient support throughout the journey was a critical step in ensuring adoption and project success.

My Learnings:

This project took me through the various phases of project development, client management and gave me a real insight into the world of software development.

1. I learnt that understanding the client’s needs is paramount. Before developing any new feature, we must consider what kind of benefit it will provide to the user.
2. Communication is the key to a successful project, good communication is what allows projects to progress smoothly and on time. Initially I considered that as a challenge for me, but working on this project has helped me get better and become more confident.
3. I also improved in writing a clean and easy-to-understand code and learnt how to be an efficient team member.
4. Importance of having a good mentor! Fortunately, I have had two wonderful mentors, Anupama and Sriman, who have guided me with technical and functional aspects and supported me throughout the journey.

![Mariya Ansi of Yuvabe working on the Pitanga booking application](/images/blogs/pitanga-3.jpg#lg-center)

Overall, the Pitanga project was a wonderful learning experience for me. I not only enjoyed developing the application but the whole process of working with the client, the joy of writing code and the thrill involved in tackling various problems and challenges has helped me become more confident about taking on more such projects and helping more organisations overcome challenges using easy to use software applications.
