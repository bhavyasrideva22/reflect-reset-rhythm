import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
  sectionName: string;
  questionNumber?: number;
  totalQuestions?: number;
}

export const AssessmentProgress = ({ 
  currentSection, 
  totalSections, 
  sectionName, 
  questionNumber, 
  totalQuestions 
}: AssessmentProgressProps) => {
  const overallProgress = (currentSection / totalSections) * 100;
  const sectionProgress = questionNumber && totalQuestions 
    ? (questionNumber / totalQuestions) * 100 
    : 0;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Section {currentSection} of {totalSections}: {sectionName}
        </span>
        {questionNumber && totalQuestions && (
          <span className="text-sm text-muted-foreground">
            {questionNumber} / {totalQuestions}
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <Progress 
          value={overallProgress} 
          className="h-2 bg-muted"
        />
        {questionNumber && totalQuestions && (
          <Progress 
            value={sectionProgress} 
            className="h-1 bg-muted/50"
          />
        )}
      </div>
      
      <div className="text-xs text-muted-foreground mt-1 text-center">
        {Math.round(overallProgress)}% complete
      </div>
    </div>
  );
};