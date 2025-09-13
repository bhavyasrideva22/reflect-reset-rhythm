import { useState } from "react";
import { AssessmentHero } from "./AssessmentHero";
import { AssessmentProgress } from "./AssessmentProgress";
import { QuestionCard } from "./QuestionCard";
import { assessmentSections, Question } from "@/data/assessmentQuestions";
import { Card } from "@/components/ui/card";

interface AssessmentResponse {
  questionId: string;
  answer: string;
  confidence?: number;
}

export const AssessmentContainer = () => {
  const [currentView, setCurrentView] = useState<'hero' | 'assessment'>('hero');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [currentConfidence, setCurrentConfidence] = useState<number>(50);

  const currentSection = assessmentSections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  const totalSections = assessmentSections.length;
  const isLastQuestionInSection = currentQuestionIndex === currentSection?.questions.length - 1;
  const isLastSection = currentSectionIndex === totalSections - 1;

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAnswer = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const handleConfidenceChange = (confidence: number) => {
    setCurrentConfidence(confidence);
  };

  const handleNext = () => {
    // Save the response
    const newResponse: AssessmentResponse = {
      questionId: currentQuestion.id,
      answer: currentAnswer,
      confidence: currentConfidence
    };
    
    setResponses(prev => [...prev, newResponse]);

    // Move to next question or section
    if (isLastQuestionInSection) {
      if (isLastSection) {
        // Assessment complete - show results (to be implemented)
        console.log('Assessment complete!', responses);
      } else {
        // Move to next section
        setCurrentSectionIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      }
    } else {
      // Move to next question in current section
      setCurrentQuestionIndex(prev => prev + 1);
    }

    // Reset current answer state
    setCurrentAnswer("");
    setCurrentConfidence(50);
  };

  if (currentView === 'hero') {
    return <AssessmentHero onStartAssessment={handleStartAssessment} />;
  }

  if (!currentSection || !currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Assessment Complete!</h2>
          <p className="text-muted-foreground">Thank you for completing the Reflection & Relaxation Balance assessment.</p>
        </Card>
      </div>
    );
  }

  // Show section intro for first question of each section
  if (currentQuestionIndex === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 py-8">
        <div className="container mx-auto px-4">
          <AssessmentProgress
            currentSection={currentSectionIndex + 1}
            totalSections={totalSections}
            sectionName={currentSection.title}
          />
          
          <Card className="max-w-3xl mx-auto p-8 shadow-gentle border-border/50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  {currentSectionIndex + 1}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {currentSection.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {currentSection.description}
              </p>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => setCurrentQuestionIndex(1)}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-floating"
              >
                Begin Section
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 py-8">
      <div className="container mx-auto px-4">
        <AssessmentProgress
          currentSection={currentSectionIndex + 1}
          totalSections={totalSections}
          sectionName={currentSection.title}
          questionNumber={currentQuestionIndex}
          totalQuestions={currentSection.questions.length}
        />
        
        <QuestionCard
          question={currentQuestion.question}
          type={currentQuestion.type}
          options={currentQuestion.options || []}
          onAnswer={handleAnswer}
          onNext={handleNext}
          questionNumber={currentQuestionIndex}
          showConfidence={currentQuestion.type === 'choice'}
          onConfidenceChange={handleConfidenceChange}
        />
      </div>
    </div>
  );
};