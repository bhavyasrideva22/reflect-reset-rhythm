import heroImage from "@/assets/hero-reflection.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AssessmentHeroProps {
  onStartAssessment: () => void;
}

export const AssessmentHero = ({ onStartAssessment }: AssessmentHeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-accent/20" />
      
      {/* Hero image with overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Reflection & Relaxation Balance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Personal & Emotional Intelligence Assessment
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover how well you balance introspection, rest, and emotional wellness. 
            For ages 13-50 seeking deeper self-understanding and resilience.
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-background/80 border-border/50 shadow-floating p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                15-20 minutes
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Science-based insights
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                Personalized growth plan
              </span>
            </div>
          </div>
          
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <p className="text-foreground leading-relaxed">
              <strong>Reflection and relaxation are essential companions for emotional health.</strong> In our busy lives—school, work, family, friendships—it's easy to push ahead without pausing to process, rest, or understand what's going on inside.
            </p>
            <p className="text-foreground leading-relaxed">
              Yet moments of slowing down, reflecting, and relaxing help you recharge, reduce stress, improve clarity, and boost your ability to connect with others.
            </p>
            <p className="text-foreground leading-relaxed">
              This assessment will help you discover your strengths in noticing thoughts and feelings, allowing downtime, and practicing restful habits—while identifying areas for growth.
            </p>
          </div>

          <Button 
            onClick={onStartAssessment}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-floating"
          >
            Begin Your Assessment Journey
          </Button>
        </Card>

        <div className="text-sm text-muted-foreground">
          Your responses are private and used only to generate your personalized insights
        </div>
      </div>
    </div>
  );
};