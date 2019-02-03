using System;

namespace OfficePortal.Api.Core
{
    public class CurrentInterviewStatus
    {
        public int Id { get; set; }
        public int CandidateId { get; set; }
        public string RoundName { get; set; }
        public string InterviewerName { get; set; }
        public string Feedback { get; set; }
        public DateTime InterviewDateTime { get; set; }
    }
}