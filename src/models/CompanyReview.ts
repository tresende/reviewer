import Comment from './Comment'
export default interface CompanyReview {
  company: string
  location: string
  comments: Comment[]
}
