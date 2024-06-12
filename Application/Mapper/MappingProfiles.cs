using AutoMapper;
using Domain;

namespace Application.Mapper;

internal class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}
