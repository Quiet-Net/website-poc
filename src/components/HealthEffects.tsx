import React, { useState } from 'react';
import './HealthEffects.css';

const HealthEffects = () => {
  const [activeTab, setActiveTab] = useState('physical');

  const tabs = [
    { id: 'physical', label: 'Physical Health', icon: '🫀' },
    { id: 'mental', label: 'Mental Health', icon: '🧠' },
    { id: 'psychological', label: 'Psychological Effects', icon: '🧩' },
    { id: 'sleep', label: 'Sleep & Rest', icon: '😴' },
    { id: 'productivity', label: 'Productivity', icon: '📊' },
    { id: 'animals', label: 'Effects on Animals', icon: '🦋' },
    { id: 'environment', label: 'Environmental Effects', icon: '🌱' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'physical':
        return (
          <div className="tab-content physical">
            <h3>Physical Health Effects</h3>
            <p className="section-intro">
              Noise pollution can cause serious physical health problems, including hearing loss, high blood pressure, 
              cardiovascular disease, and it can also interfere with communication.
            </p>
            
            <div className="effect-sections">
              <div className="effect-section">
                <h4>Hearing Loss</h4>
                <p>
                  Hearing loss is caused by prolonged exposure to loud noise. The noise damages the hair cells 
                  in the inner ear. The risk of hearing loss increases with the noise level and the duration 
                  of exposure. Noise-induced hearing loss is irreversible and can have a significant impact 
                  on a person's quality of life.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Damage to inner ear hair cells</li>
                    <li>Permanent hearing loss</li>
                    <li>Tinnitus (ringing in ears)</li>
                    <li>Reduced sound perception</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Cardiovascular Effects</h4>
                <p>
                  Being exposed to high levels of noise pollution can cause an increase in blood pressure. 
                  This, in turn, leads to cardiovascular disease. This is particularly problematic for people 
                  who are already at risk of heart disease (e.g., people with high blood pressure or diabetes).
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Increased blood pressure</li>
                    <li>Heart disease risk</li>
                    <li>Cardiovascular stress</li>
                    <li>Irregular heart rhythm</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Communication Impact</h4>
                <p>
                  When noise levels are high, people may be forced to shout or strain their voices to be heard, 
                  which can lead to vocal cord problems. Those who work in noisy environments like construction 
                  sites, airports or nightclubs are most at risk.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Vocal cord strain</li>
                    <li>Voice disorders</li>
                    <li>Communication difficulties</li>
                    <li>Occupational voice problems</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Other Physical Effects</h4>
                <div className="effect-card">
                  <ul>
                    <li>Respiratory agitation</li>
                    <li>Headaches and migraines</li>
                    <li>Digestive issues (gastritis, colitis)</li>
                    <li>Muscle tension</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'mental':
        return (
          <div className="tab-content mental">
            <h3>Mental Health Impact</h3>
            <p className="section-intro">
              Chronic exposure to urban noise is harmful not only for auditory perception but also affects cardiovascular, 
              gastrointestinal, and nervous systems, while causing significant psychological distress.
            </p>

            <div className="effect-highlight">
              According to EU studies, around 25% of the population experiences deterioration in quality of life due to noise-related 
              annoyance, and about 5-15% suffer from sleep disorders, resulting in many disability-adjusted life years (DALYs) lost annually.
            </div>

            <div className="effect-sections">
              <div className="effect-section">
                <h4>Research Findings</h4>
                <p>
                  Studies across major databases (PubMed, Cochrane Library, Scopus) have shown that prolonged negative feelings 
                  towards noise may increase the risk of severe psychological problems. The main sources of exposure include airports, 
                  wind turbines, roads, and trains, with the majority of reported disorders dealing with annoyance and sleep 
                  disturbances, often associated with cardiovascular symptoms.
                </p>
              </div>

              <div className="effect-section">
                <h4>Common Mental Health Issues</h4>
                <div className="effect-card">
                  <ul>
                    <li>Increased stress levels</li>
                    <li>Anxiety disorders</li>
                    <li>Depression symptoms</li>
                    <li>Mood swings</li>
                    <li>Irritability</li>
                    <li>Emotional exhaustion</li>
                    <li>Social withdrawal</li>
                    <li>Increased aggression</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Impact on Daily Life</h4>
                <p>
                  Psychological distress has been recognized as a substantial public health problem and a leading cause of 
                  morbidity and disability. Tiredness, headaches, and other psychological conditions are commonly associated 
                  with noise exposure in adult populations.
                </p>
              </div>

              <div className="effect-section">
                <h4>EU Directives and Protection</h4>
                <p>
                  The EU has issued directives (2002/49/CE) aimed at avoiding, preventing, or reducing the harmful effects 
                  of exposure to environmental noise. This includes determining noise exposure through acoustic mapping, 
                  public information on noise effects, and the adoption of action plans.
                </p>
              </div>
            </div>
          </div>
        );

      case 'psychological':
        return (
          <div className="tab-content psychological">
            <h3>Psychological Effects</h3>
            <div className="effect-section">
              <p>
                Noise pollution can cause stress, anxiety and other psychological effects, especially when the noise is continuous, loud or unpredictable. Prolonged exposure to noise pollution can lead to irritability, sleep disturbances and decreased concentration.<br/><br/>
                The effects of noise pollution are even more pronounced when people are exposed to the noise for prolonged periods. One of the most common psychological effects of noise is stress. When people are exposed to loud or continuous noise, their bodies produce cortisol, the stress hormone. High levels of cortisol have a negative impact on health. This can lead to a range of mental and physical problems, including anxiety, depression and even heart disease.<br/><br/>
                Besides stress and anxiety, noise pollution can also disrupt sleep. Even if the noise levels aren't high enough to wake you up, they can still cause disturbances that lead to fragmented sleep. This then can lead to sleep deprivation.<br/><br/>
                When a person has poor sleep quality, they can experience problems with their physical and mental health. They might suffer irritability and decreased concentration and have reduced performance at school or work.<br/><br/>
                In children, noise pollution can have an impact on their development. Over time, it can affect their ability to learn, concentrate and communicate. It can also lead to behavioural problems, including aggression and hyperactivity.
              </p>
            </div>
          </div>
        );

      case 'sleep':
        return (
          <div className="tab-content sleep">
            <h3>Sleep & Rest Disruption</h3>
            <div className="effect-card">
              <ul>
                <li>Difficulty falling asleep</li>
                <li>Frequent night wakings</li>
                <li>Reduced sleep quality</li>
                <li>Daytime fatigue</li>
                <li>Disrupted circadian rhythm</li>
                <li>Sleep deprivation effects</li>
                <li>Decreased recovery time</li>
              </ul>
            </div>
            <div className="effect-section">
              <h4>Short-Term Effects of Noise</h4>
              <p>
                Getting sufficient undisturbed sleep is critical for feeling good and performing well. Although you are unlikely to notice subtle changes to your sleep structure and biochemical experience of sleep, these changes can manifest the next day in ways that are more pronounced. Sleepiness, irritability, and poorer mental health are associated with <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">Trusted Source<br/>National Library of Medicine, Biotech Information</a>. Exposure to nighttime noise the night before can cause these effects.
              </p>
            </div>
            <div className="effect-section">
              <h4>Long-Term Effects of Noise</h4>
              <p>
                Poor quality sleep over a long period of time is linked with <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">Trusted Source<br/>National Library of Medicine, Biotech Information</a> high blood pressure, heart disease, weight gain, type 2 diabetes, and certain types of cancer. The relationship between noise during sleep and long-term health effects is less clear, but studies indicate a possible association with high blood pressure, heart disease and stroke, increased use of sleep medications, and decreased overall health. <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">View Source</a>
              </p>
            </div>
          </div>
        );

      case 'productivity':
        return (
          <div className="tab-content productivity">
            <h3>Impact on Productivity</h3>
            <p className="section-intro">
              For some, noise pollution may be little more than a trivial annoyance. However, for the astute business owner, 
              noise pollution can be a serious source of employee ill health, both physical and mental, as well as a real productivity killer.
            </p>
            <p className="section-intro">
              Noise pollution occurs when there is an unwanted or disturbing sound that interferes with normal activities 
              or diminishes quality of life.
            </p>
            <div className="effect-highlight">
              The 2011 World Health Organisation report "Burden of Disease from environmental noise" looks at the relationship 
              between environmental noise and health. They calculated that the financial cost of lost work days, healthcare treatment, 
              impaired learning and decreased productivity came to $30.8 billion a year in Europe alone.
            </div>
            
            <div className="effect-sections">
              <h4>Six Ways Noise Pollution Affects Workplace Productivity</h4>
              
              <div className="effect-section">
                <h5>1. Disruptions from Ambient Office Noise</h5>
                <p>
                  Ringing telephones, loud co-workers and the hum of general office life can cause frequent minor disruptions 
                  which can amount to a significant loss in man hours.
                </p>
              </div>

              <div className="effect-section">
                <h5>2. Increased Blood Pressure</h5>
                <p>
                  Constant interruptions from sources of noise have been shown to cause long term health risks that you might 
                  not otherwise associate with noise. The University of Michigan's Occupational Health Nursing Programme conducted 
                  a study which found that chronic noise in the workplace can cause increased blood pressure and even heart disease.
                </p>
              </div>

              <div className="effect-section">
                <h5>3. Mental Health Problems</h5>
                <p>
                  Perhaps unsurprisingly, dealing with incessant noise pollution can take a toll on your employees' mental health. 
                  Excessive or repetitive noises can cause moodiness, anxiety and even depression in workers.
                </p>
              </div>

              <div className="effect-section">
                <h5>4. Increased Workplace Accidents</h5>
                <p>
                  Excessive noise can cause workplace accidents and injuries in a variety of different ways. For example, workers 
                  may not hear warning signals, or may not be able to think clearly due to the noise of their environment. This 
                  is particularly true of industries such as construction.
                </p>
              </div>

              <div className="effect-section">
                <h5>5. Hearing Loss</h5>
                <p>
                  The Occupational Safety and Health Administration reports that one of the foremost occupational concerns is 
                  hearing loss caused by excessive noise in the working environment. A vast proportion of this hearing loss is 
                  preventable through ensuring safety measures such as wearing earplugs or reducing noise volume are adhered to.
                </p>
              </div>

              <div className="effect-section">
                <h5>6. Increased Errors</h5>
                <p>
                  The likelihood of mistakes and general error is vastly increased in a noisy environment and can be a material 
                  issue in causing staff burnout. Consistent distracting noises and high levels of burnout can also lead to 
                  high blood pressure and stress.
                </p>
              </div>
            </div>
          </div>
        );

      case 'animals':
        return (
          <div className="tab-content animals">
            <h3>Effects on Animals</h3>
            <p className="section-intro">
              Noise pollution can disrupt animals in a variety of ways. This includes feeding, communication 
              and mating behaviours. This leads to reduced reproductive success and declines in population. 
              Some animals also suffer from hearing loss, stress and changes in behaviour and migration patterns.
            </p>
            
            <div className="effect-sections">
              <div className="effect-section">
                <h4>Communication & Mating</h4>
                <p>
                  Animals use sound for a range of purposes, including attracting mates, defending territories 
                  and locating prey. If noise pollution interferes with these channels of communication, it can 
                  have serious consequences on animal populations. For example, birds might struggle to hear 
                  mating calls, leading to a decrease in reproduction. Marine animals like whales and dolphins 
                  rely on sound to navigate, communicate and locate prey. If they are exposed to loud noise 
                  from shipping, sonar or seismic surveys, they can experience changes in behaviour, stress, 
                  hearing loss and sometimes even death.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Disrupted mating calls</li>
                    <li>Territory defense problems</li>
                    <li>Marine navigation issues</li>
                    <li>Reduced reproductive success</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Feeding Behavior</h4>
                <p>
                  Noise can also affect animal feeding behaviour. Animals that use sound to find their prey 
                  can find it more difficult to do so when there is noise pollution. This might mean food 
                  is more scarce and there's more competition for resources.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Difficulty locating prey</li>
                    <li>Increased food scarcity</li>
                    <li>Resource competition</li>
                    <li>Changed hunting patterns</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Migration & Movement</h4>
                <p>
                  Besides problems with feeding and communication, noise pollution also impacts animal migration. 
                  Animals might avoid noisy areas and thus alter their migration routes. This can have an impact 
                  on their population distribution as well as their abundance.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Altered migration routes</li>
                    <li>Changed population distribution</li>
                    <li>Habitat avoidance</li>
                    <li>Disrupted seasonal movements</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Physical & Behavioral Effects</h4>
                <div className="effect-card">
                  <ul>
                    <li>Hearing damage and loss</li>
                    <li>Increased stress levels</li>
                    <li>Behavioral changes</li>
                    <li>Population decline</li>
                    <li>Ecosystem imbalance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'environment':
        return (
          <div className="tab-content environment">
            <h3>Environmental Effects</h3>
            <p className="section-intro">
              Noise pollution has significant negative impacts on the environment. This includes changes in 
              plant growth, soil quality and water quality. It can also affect wildlife habitats and ecosystem 
              balance, which can lead to reduced biodiversity and ecological damage.
            </p>
            
            <div className="effect-sections">
              <div className="effect-section">
                <h4>Plant Growth Impact</h4>
                <p>
                  Studies have shown that exposure to high levels of noise pollution can inhibit plant growth, 
                  reduce plant diversity and lead to changes in plant community structure. This is because 
                  noise pollution interferes with photosynthesis and nutrient uptake.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Inhibited plant growth</li>
                    <li>Reduced plant diversity</li>
                    <li>Altered community structure</li>
                    <li>Disrupted photosynthesis</li>
                    <li>Impaired nutrient uptake</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Soil Quality</h4>
                <p>
                  The soil quality can also be affected. Exposure to loud noise can lead to soil compaction. 
                  This reduces the amount of air and water available to plants and other organisms. In turn, 
                  this can lead to a decrease in soil fertility and nutrient availability, which can have 
                  cascading effects on the ecosystem as a whole.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Soil compaction</li>
                    <li>Reduced air availability</li>
                    <li>Decreased water retention</li>
                    <li>Lower soil fertility</li>
                    <li>Reduced nutrient availability</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Aquatic Ecosystems</h4>
                <p>
                  In aquatic environments, noise pollution can disrupt the natural behaviours of aquatic 
                  organisms. This can lead to changes in their feeding and mating patterns and, ultimately, 
                  cause a decrease in biodiversity and aquatic ecosystem health.
                </p>
                <div className="effect-card">
                  <ul>
                    <li>Disrupted aquatic behavior</li>
                    <li>Changed feeding patterns</li>
                    <li>Altered mating habits</li>
                    <li>Reduced biodiversity</li>
                    <li>Compromised ecosystem health</li>
                  </ul>
                </div>
              </div>

              <div className="effect-section">
                <h4>Ecosystem Balance</h4>
                <div className="effect-card">
                  <ul>
                    <li>Habitat degradation</li>
                    <li>Biodiversity loss</li>
                    <li>Ecological disruption</li>
                    <li>Food chain impacts</li>
                    <li>Long-term environmental damage</li>
                  </ul>
                </div>
                <div className="image-note">
                  <span className="note-icon">✈️</span>
                  <p>Air traffic is a significant contributor to environmental noise pollution, affecting both terrestrial and aquatic ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="health-effects">
      <h2>Why Is Noise Pollution Bad For You?</h2>
      <p className="intro">
        Noise pollution affects our health in many ways, from physical symptoms to mental well-being. Explore the different impacts below:
      </p>
      
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="tab-content-container">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default HealthEffects; 