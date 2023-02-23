import Slide from './Slide';
import ArticleCard from './ArticleCard';
interface MainHomeProps {}

export const MainHome: React.FC<MainHomeProps> = ({}) => {
  return (
    <div className="w-4/6 mx-auto px-4 pt-16">
      <Slide />
      <ArticleCard
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        title="Title of the article"
        author={{
          name: 'John Doe',
          title: 'Author and title',
        }}
        date="February 7, 2023"
        excerpt="Short description of the article"
      />
      <ArticleCard
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        title="Title of the article"
        author={{
          name: 'John Doe',
          title: 'Author and title',
        }}
        date="February 7, 2023"
        excerpt="Short description of the article"
      />
      <ArticleCard
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        title="Title of the article"
        author={{
          name: 'John Doe',
          title: 'Author and title',
        }}
        date="February 7, 2023"
        excerpt="Short description of the article"
      />
    </div>
  );
};
